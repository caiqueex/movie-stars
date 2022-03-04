import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDashboardComponent } from './movie-dashboard.component';
import { MovieDashboardRoutingModule } from './movie-dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieStarsService } from 'src/services/movie-stars.service';


@NgModule({
  declarations: [
    MovieDashboardComponent
  ],
  imports: [
    CommonModule,
    MovieDashboardRoutingModule,
    MatButtonToggleModule,
    ReactiveFormsModule
  ],
  providers: [
    MovieStarsService,
    HttpClientModule,
  ],
})
export class MovieDashboardModule { }
