import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyRecipesPagePageRoutingModule } from './my-recipes-page-routing.module';

import { MyRecipesPagePage } from './my-recipes-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyRecipesPagePageRoutingModule
  ],
  declarations: [MyRecipesPagePage]
})
export class MyRecipesPagePageModule {}
