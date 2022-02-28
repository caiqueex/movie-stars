import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/movie/most-popular',
    pathMatch: 'full'
  },
  {
    path: 'movie/most-popular',
    component: MovieDashboardComponent
  },
  {
    path: 'movie/search',
    component: MovieDashboardComponent
  },
  {
    path: 'movie/now-playing',
    component: MovieDashboardComponent
  },
  {
    path: 'movie/top-rated',
    component: MovieDashboardComponent
  },
  {
    path: 'detail/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**', pathMatch: 'full', 
    redirectTo: '/page-not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
