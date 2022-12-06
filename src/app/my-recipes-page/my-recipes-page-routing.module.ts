import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyRecipesPagePage } from './my-recipes-page.page';

const routes: Routes = [
  {
    path: '',
    component: MyRecipesPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyRecipesPagePageRoutingModule {}
