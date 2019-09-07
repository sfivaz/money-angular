import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesPageComponent} from './categories-page.component';
import {NavbarModule} from "../../shared/navbar/navbar.module";
import {CategoryRowModule} from "../../category/category-row/category-row.module";
import {CategoryFormModule} from "../../category/category-form/category-form.module";
import {ConfirmDeleteModule} from "../../shared/confirm-delete/confirm-delete.module";

@NgModule({
  declarations: [CategoriesPageComponent],
  imports: [
    CommonModule,
    NavbarModule,
    CategoryRowModule,
    CategoryFormModule,
    ConfirmDeleteModule,
  ]
})
export class CategoriesPageModule {
}
