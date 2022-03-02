import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    RouterModule,
    MatTooltipModule
  ],
  exports: [MovieListComponent]
})
export class MovieListModule { }
