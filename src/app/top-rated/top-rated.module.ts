import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRatedRoutingModule } from './top-rated-routing.module';
import { TopRatedComponent } from './top-rated.component';
import { MovieListModule } from '../movie-list/movie-list.module';


@NgModule({
  declarations: [
    TopRatedComponent
  ],
  imports: [
    CommonModule,
    TopRatedRoutingModule,
    MovieListModule
  ]
})
export class TopRatedModule { }
