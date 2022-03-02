import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/model/movieDetail';
import { MovieDetailsService } from './movie-details.service';
import { formatMovieDetails, formatGenres, toHoursAndMinutes } from 'src/helpers/formatters'
import { MovieVideo } from 'src/model/movieVideo';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { TrailerModalComponent } from '../trailer-modal/trailer-modal.component';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public movieDetails: MovieDetail;
  public movieVideos: MovieVideo[];

  constructor(
    private route: ActivatedRoute,
    private movieDetailsService: MovieDetailsService,
    public dialog: MatDialog,
    public domSanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['id']) {
        this.movieDetailsService.getMovieDetails(params['id'])
          .subscribe((movie: MovieDetail) => {
            this.movieDetails = formatMovieDetails(movie, true);

            this.getMovieYTVideo(movie.id)

          })
      }
    });
  }

  private getMovieYTVideo(id: number): void {
    this.movieDetailsService.getMovieVideo(id).subscribe((res: MovieVideo[]) => {
      this.movieVideos = res.map(video => {
        video.site = `https://www.youtube.com/watch?v=${video.key}`;
        return video;
      });
    });
  }

  public openDialog() {
    const ytVideo = this.domSanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.movieVideos[0].key}?autoplay=1`
    );
    const dialogRef = this.dialog.open(TrailerModalComponent, {
      data: { ytVideo: ytVideo },
      panelClass: 'yt-modal',
      width: '80rem',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  public formatGenresByComma(genres): string {
    return formatGenres(genres);
  }

  public formatRuntime(hour: number): string {
    return toHoursAndMinutes(hour);
  }

}
