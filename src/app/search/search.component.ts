import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, pluck, Subject, takeUntil } from 'rxjs';
import { formatMovies } from 'src/helpers/formatters';
import { Movie } from 'src/model/movie';
import { MovieDashboardService } from '../movie-dashboard/movie-dashboard.service';
import {  ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  public movies: Array<Movie>;
  private destroy$ = new Subject<void>();

  constructor(
    private movieDashboardService: MovieDashboardService,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.activatedRoute
      .queryParams.subscribe(params => {
        this.getSearch(params['query'])
          .pipe(
            pluck('results'),
            map((mv: Movie[]) => formatMovies(mv)),
            takeUntil(this.destroy$),
          ).subscribe((res) => {
            this.movies = res;
            this.cdr.detectChanges();
          });
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getSearch(term: string): Observable<any> {
    if (term === '') {
      return of([]);
    }
    return this.movieDashboardService.searchMovie(term);
  }

  public nextPage() {
    this.movieDashboardService.nextPage().subscribe((m: Movie[]) => {
      this.movies.push(...formatMovies(m));
    });
  }

}
