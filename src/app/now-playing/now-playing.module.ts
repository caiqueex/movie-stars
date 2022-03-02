import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NowPlayingRoutingModule } from './now-playing-routing.module';
import { NowPlayingComponent } from './now-playing.component';
import { MovieListModule } from '../movie-list/movie-list.module';


@NgModule({
  declarations: [
    NowPlayingComponent
  ],
  imports: [
    CommonModule,
    NowPlayingRoutingModule,
    MovieListModule
  ]
})
export class NowPlayingModule { }
