import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeDetailsPagePageRoutingModule } from './recipe-details-page-routing.module';

import { RecipeDetailsPagePage } from './recipe-details-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeDetailsPagePageRoutingModule
  ],
  declarations: [RecipeDetailsPagePage]
})
export class RecipeDetailsPagePageModule {}
