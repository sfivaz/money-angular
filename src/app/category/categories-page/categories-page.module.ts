import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesPageComponent} from './categories-page.component';
import {NavbarModule} from "../../shared/navbar/navbar.module";
import {CategoryRowModule} from "../category-row/category-row.module";

@NgModule({
  declarations: [CategoriesPageComponent],
  imports: [
    CommonModule,
    NavbarModule,
    CategoryRowModule
  ],
  exports: [CategoriesPageComponent]
})
export class CategoriesPageModule {
}
