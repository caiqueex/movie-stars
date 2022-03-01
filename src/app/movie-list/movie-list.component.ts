import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/model/movie';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  @Input()
  movies: Array<Movie> = [];

  @Output()
  nextPage = new EventEmitter<boolean>();

  onScroll () {
    this.nextPage.emit(true);
  }

}
