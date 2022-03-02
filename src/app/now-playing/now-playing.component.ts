import { Component, OnInit } from '@angular/core';
import { map, pluck, Subject, takeUntil } from 'rxjs';
import { formatMovies } from 'src/helpers/formatters';
import { Movie } from 'src/model/movie';
import { MovieDashboardService } from '../movie-dashboard/movie-dashboard.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {

  public movies: Array<Movie>;
  private destroy$ = new Subject<void>();

  constructor(
    private movieDashboardService: MovieDashboardService,
  ) { }

  ngOnInit(): void {

    this.movieDashboardService.getMovie('now_playing')
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
