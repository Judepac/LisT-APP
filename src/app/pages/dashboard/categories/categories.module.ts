import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { ListProductsComponent } from './list-products/list-products.component';


@NgModule({
  declarations: [CategoriesComponent, ListCategorieComponent, ListProductsComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
