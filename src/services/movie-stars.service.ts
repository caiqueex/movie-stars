import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MoviesPagedListResponse } from 'src/model/moviesPagedListResponse';
import { Movie } from 'src/model/movie';
import { formatParameters } from 'src/helpers/formatters'
import { MovieDetail } from 'src/model/movieDetail';
import { MovieVideo } from 'src/model/movieVideo';
import { MovieVideosPagedListResponse } from 'src/model/movieVideosPagedListResponse';

@Injectable()
export class MovieStarsService implements OnDestroy {

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

    public searchMovie(term: string, page?: number): Observable<MoviesPagedListResponse> {

        localStorage.setItem('previous_url', `${this.HOME_PATH}search/movie`);
        localStorage.setItem('previous_parameters', `{"query": "${term}", "page": 1}`);

        return this.httpClient
            .get<MoviesPagedListResponse>(`${this.HOME_PATH}search/movie`, formatParameters({ query: term, page: page }))
            .pipe(
                takeUntil(this.destroy$)
            );
    }

    public getMovieDetails(id: number): Observable<MovieDetail> {
        return this.httpClient
            .get<MovieDetail>(`${this.HOME_PATH}movie/${id}`, formatParameters({}))
            .pipe(
                takeUntil(this.destroy$)
            );
    }

    public getMovieVideo(id: number): Observable<Array<MovieVideo>> {
        return this.httpClient
            .get<MovieVideosPagedListResponse>(`${this.HOME_PATH}movie/${id}/videos`, formatParameters({}))
            .pipe(
                takeUntil(this.destroy$),
                pluck('results'),
            );
    }

    public nextPage(): Observable<Array<Movie>> {

        let previous_parameters: any = JSON.parse(localStorage.getItem('previous_parameters'))

        return this.httpClient
            .get<MoviesPagedListResponse>(localStorage.getItem('previous_url'), formatParameters(previous_parameters ? { query: previous_parameters.query, page: previous_parameters.page + 1 } : {}))
            .pipe(
                takeUntil(this.destroy$),
                pluck('results'),
                tap((a) => localStorage.setItem('previous_parameters', `{"query": "${previous_parameters ? previous_parameters.query : null}", "page": ${previous_parameters.page + 1}}`))
            );
    }

}
