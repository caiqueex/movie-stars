import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, pluck, Subject, takeUntil } from 'rxjs';
import { formatMovies } from 'src/helpers/formatters';
import { Movie } from 'src/model/movie';
import { ChangeDetectorRef } from '@angular/core';
import { MovieStarsService } from 'src/services/movie-stars.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  public movies: Array<Movie>;
  private destroy$ = new Subject<void>();

  constructor(
    private movieStarsService: MovieStarsService,
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
    return this.movieStarsService.searchMovie(term);
  }

  public nextPage() {
    this.movieStarsService.nextPage().subscribe((m: Movie[]) => {
      this.movies.push(...formatMovies(m));
    });
  }

}
