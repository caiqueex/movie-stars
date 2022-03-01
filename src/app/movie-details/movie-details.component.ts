import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/model/movieDetail';
import { MovieDetailsService } from './movie-details.service';
import { formatMovieDetails, formatGenres } from 'src/helpers/formatters'

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public movieDetails: MovieDetail;

  constructor(
    private route: ActivatedRoute,
    private movieDetailsService: MovieDetailsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['id']) {
        this.movieDetailsService.getMovieDetails(params['id'])
          .subscribe((movie: MovieDetail) => {
            this.movieDetails = formatMovieDetails(movie);
          })
      }
    });
  }

  public formatGenresByComma(genres): string {
    return formatGenres(genres);
  }

}
