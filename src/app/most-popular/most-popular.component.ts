import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, pluck, Subject, takeUntil } from 'rxjs';
import { formatMovies } from 'src/helpers/formatters';
import { Movie } from 'src/model/movie';
import { MovieDashboardService } from '../movie-dashboard/movie-dashboard.service';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss']
})
export class MostPopularComponent implements OnInit, OnDestroy {

  public movies: Array<Movie>;
  private destroy$ = new Subject<void>();

  constructor(
    private movieDashboardService: MovieDashboardService,
  ) { }

  ngOnInit(): void {

    this.movieDashboardService.getMovie('popular')
      .pipe(
        pluck('results'),
        map((mv: Movie[]) => formatMovies(mv)),
        takeUntil(this.destroy$),
      ).subscribe((res) => this.movies = res);

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public nextPage() {
    this.movieDashboardService.nextPage().subscribe((m: Movie[]) => {
      this.movies.push(...formatMovies(m));
    });
  }

}
