import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostPopularRoutingModule } from './most-popular-routing.module';
import { MostPopularComponent } from './most-popular.component';
import { MovieListModule } from '../movie-list/movie-list.module';
import { MovieStarsService } from 'src/services/movie-stars.service';

@NgModule({
  declarations: [
    MostPopularComponent
  ],
  imports: [
    CommonModule,
    MostPopularRoutingModule,
    MovieListModule
  ],
  providers: [
    MovieStarsService
  ]
})
export class MostPopularModule { }
