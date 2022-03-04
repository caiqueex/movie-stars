import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map, pluck, Subject, takeUntil } from 'rxjs';
import { formatMovies } from 'src/helpers/formatters';
import { Movie } from 'src/model/movie';
import { MovieStarsService } from 'src/services/movie-stars.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {

  public movies: Array<Movie>;
  private destroy$ = new Subject<void>();

  constructor(
    private movieStarsService: MovieStarsService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.movieStarsService.getMovie('now_playing')
      .pipe(
        pluck('results'),
        map((mv: Movie[]) => formatMovies(mv)),
        takeUntil(this.destroy$),
      ).subscribe((res) => {
        this.movies = res;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public nextPage() {
    this.movieStarsService.nextPage().subscribe((m: Movie[]) => {
      this.movies.push(...formatMovies(m));
    });
  }


}
