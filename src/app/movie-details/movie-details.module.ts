import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MovieStarsService } from 'src/services/movie-stars.service';

@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    MatDialogModule,
    LazyLoadImageModule
  ],
  providers: [
    MovieStarsService,
    HttpClientModule,
  ],
})
export class MovieDetailsModule { }
