import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostPopularComponent } from './most-popular.component';

const routes: Routes = [{path: '', component: MostPopularComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MostPopularRoutingModule { }
