import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { formatParameters } from 'src/helpers/formatters'
import { MovieDetail } from 'src/model/movieDetail';
import { MovieVideo } from 'src/model/movieVideo';
import { MovieVideosPagedListResponse } from 'src/model/movieVideosPagedListResponse';

@Injectable()
export class MovieDetailsService implements OnDestroy {

    private destroy$ = new Subject<void>();
    private HOME_PATH = environment.HOME_PATH;

    constructor(
        protected httpClient: HttpClient,
    ) { }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
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

}
