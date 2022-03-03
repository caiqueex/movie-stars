import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDashboardComponent } from './movie-dashboard.component';
import { MovieDashboardRoutingModule } from './movie-dashboard-routing.module';
import { MovieDashboardService } from './movie-dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';


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
    MovieDashboardService,
    HttpClientModule,
  ],
})
export class MovieDashboardModule { }
