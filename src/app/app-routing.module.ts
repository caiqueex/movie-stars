import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/movie/most-popular',
    pathMatch: 'full'
  },
  {
    path: 'movie',
    redirectTo: '/movie/most-popular',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MovieDashboardComponent,
    children: [
      {
        path: 'movie/most-popular',
        loadChildren: () => import('./most-popular/most-popular.module').then(m => m.MostPopularModule)
      },
      {
        path: 'movie/now-playing',
        loadChildren: () => import('./now-playing/now-playing.module').then(m => m.NowPlayingModule)
      },
      {
        path: 'movie/top-rated',
        loadChildren: () => import('./top-rated/top-rated.module').then(m => m.TopRatedModule)
      },
      {
        path: 'movie/search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
      },
    ]
  },
  {
    path: 'movie/:id/details',
    loadChildren: () => import('./movie-details/movie-details.module').then(m => m.MovieDetailsModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/page-not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
