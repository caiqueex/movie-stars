import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MoviesPagedListResponse } from 'src/model/moviesPagedListResponse';
import { Movie } from 'src/model/movie';
import { formatParameters } from 'src/helpers/formatters'

@Injectable()
export class MovieDashboardService implements OnDestroy {

    private destroy$ = new Subject<void>();
    private HOME_PATH = environment.HOME_PATH;

    constructor(
        protected httpClient: HttpClient,
    ) { }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public getMovie(type: 'popular' | 'now_playing' | 'top_rated'): Observable<MoviesPagedListResponse> {

        localStorage.setItem('previous_url', `${this.HOME_PATH}movie/${type}`);
        localStorage.setItem('previous_parameters', `{"page": 1}`);

        return this.httpClient
            .get<MoviesPagedListResponse>(`${this.HOME_PATH}movie/${type}`, formatParameters({}))
            .pipe(
                takeUntil(this.destroy$)
            );
    }

    public searchMovie(term: string, page?: number): Observable<Array<Movie>> {

        localStorage.setItem('previous_url', `${this.HOME_PATH}search/movie`);
        localStorage.setItem('previous_parameters', `{"query": "${term}", "page": 1}`);

        return this.httpClient
            .get<MoviesPagedListResponse>(`${this.HOME_PATH}search/movie`, formatParameters({ query: term, page: page }))
            .pipe(
                takeUntil(this.destroy$),
                pluck('results'),
            );
    }

    public nextPage(): Observable<Array<Movie>> {

        let previous_parameters: any = JSON.parse(localStorage.getItem('previous_parameters'))

        return this.httpClient
            .get<MoviesPagedListResponse>(localStorage.getItem('previous_url'), formatParameters(previous_parameters ? { query: previous_parameters.query, page: previous_parameters.page } : {}))
            .pipe(
                takeUntil(this.destroy$),
                pluck('results'),
                tap((a) => localStorage.setItem('previous_parameters', `{"query": "${previous_parameters ? previous_parameters.query : null}", "page": ${previous_parameters.page + 1}}`))
            );
    }

}
