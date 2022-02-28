import {ChangeDetectionStrategy, Component, ElementRef, Inject, Injectable, OnDestroy, OnInit, Optional, ViewChild} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, Subject, Subscription } from 'rxjs';
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

  public getMovie (type: 'popular' | 'now_playing' | 'top_rated'): Observable<MoviesPagedListResponse> {
    return this.httpClient
      .get(`${this.HOME_PATH}movie/${type}`, this.formatParameters({}))
      .pipe(
        takeUntil(this.destroy$),
        pluck('results'),
        // catchError(this.handleError)
      );
  }

  public searchMovie (term: string): Observable<MoviesPagedListResponse> {
    return this.httpClient
      .get(`${this.HOME_PATH}search/movie`, this.formatParameters({query: term}))
      .pipe(
        takeUntil(this.destroy$),
        pluck('results'),
        // catchError(this.handleError)
      );
  }

}
