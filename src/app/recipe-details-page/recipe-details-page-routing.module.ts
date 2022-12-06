import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeDetailsPagePage } from './recipe-details-page.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeDetailsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeDetailsPagePageRoutingModule {}
