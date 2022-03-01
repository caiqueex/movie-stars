import {ChangeDetectionStrategy, Component, ElementRef, Inject, Injectable, OnDestroy, OnInit, Optional, ViewChild} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, Subject, Subscription, tap } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MoviesPagedListResponse } from 'src/model/moviesPagedListResponse';
import { Movie } from 'src/model/movie';

@Injectable()
export class MovieDashboardService implements OnDestroy {

    private destroy$ = new Subject<void>();
    private HOME_PATH = environment.HOME_PATH;    
    private API_KEY = environment.API_KEY;

  constructor(
      protected httpClient: HttpClient,
  ) { }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public formatParameters(options: any) {
    let params = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('language', 'en-US');

    if (options) {
      Object.keys(options).forEach(function(key) {
        params = params.append(key, options[key]);
      });
    }
    return { params };
  }

  public formatMovies(items) {
    const imgUrl = environment.IMG_PATH;
    return items.map(item => {
      if (item) {
        item.poster_path = item.poster_path
          ? `${imgUrl}${item.poster_path}`
          : './assets/images/no-image.png';
        item.backdrop_path = item.backdrop_path
          ? `${imgUrl}${item.backdrop_path}`
          : './assets/images/no-image.png';
        item.overview = item.overview.substr(0, 100) + '...';
        return item;
      }
    });
  }

  public getMovie (type: 'popular' | 'now_playing' | 'top_rated'): Observable<MoviesPagedListResponse> {

    localStorage.setItem('previous_url', `${this.HOME_PATH}movie/${type}`);
    localStorage.setItem('previous_parameters', `{"page": 1}`);
    
    return this.httpClient
    .get<MoviesPagedListResponse>(`${this.HOME_PATH}movie/${type}`, this.formatParameters({}))
    .pipe(
        takeUntil(this.destroy$)
        );
    }
    
    public searchMovie (term: string, page?: number): Observable<Array<Movie>> {
    
    localStorage.setItem('previous_url', `${this.HOME_PATH}search/movie`);
    localStorage.setItem('previous_parameters', `{"query": "${term}", "page": 1}`);

    return this.httpClient
      .get<MoviesPagedListResponse>(`${this.HOME_PATH}search/movie`, this.formatParameters({query: term, page: page}))
      .pipe(
        takeUntil(this.destroy$),
        pluck('results'),
        // catchError(this.handleError)
      );
  }

  public nextPage (): Observable<Array<Movie>> {

    let previous_parameters: any = JSON.parse(localStorage.getItem('previous_parameters'))

    return this.httpClient
      .get<MoviesPagedListResponse>(localStorage.getItem('previous_url'), this.formatParameters(previous_parameters ? {query: previous_parameters.query, page: previous_parameters.page} : {}))
      .pipe(
        takeUntil(this.destroy$),
        pluck('results'),
        tap((a) => localStorage.setItem('previous_parameters', `{"query": "${previous_parameters ? previous_parameters.query : null}", "page": ${previous_parameters.page + 1}}`))
        // catchError(this.handleError)
      );
  }

}
