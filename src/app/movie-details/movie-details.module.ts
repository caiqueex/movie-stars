import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieDetailsService } from './movie-details.service';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { LazyLoadImageModule } from 'ng-lazyload-image';

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
    MovieDetailsService,
    HttpClientModule,
  ],
})
export class MovieDetailsModule { }
