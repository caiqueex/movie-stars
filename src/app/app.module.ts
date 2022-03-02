import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MovieDashboardService } from './movie-dashboard/movie-dashboard.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MovieDetailsService } from './movie-details/movie-details.service';
import { MatDialogModule } from '@angular/material/dialog';
import { TrailerModalComponent } from './trailer-modal/trailer-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    MovieDashboardComponent,
    MovieDetailsComponent,
    PageNotFoundComponent,
    MovieListComponent,
    TrailerModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    LoadingBarHttpClientModule,
    InfiniteScrollModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    MovieDashboardService,
    HttpClientModule,
    MovieDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
