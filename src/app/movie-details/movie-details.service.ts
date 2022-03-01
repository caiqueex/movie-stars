import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MoviesPagedListResponse } from 'src/model/moviesPagedListResponse';
import { formatParameters } from 'src/helpers/formatters'
import { MovieDetail } from 'src/model/movieDetail';

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

}
