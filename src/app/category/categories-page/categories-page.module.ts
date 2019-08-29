import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesPageComponent} from './categories-page.component';

@NgModule({
  declarations: [CategoriesPageComponent],
  imports: [
    CommonModule
  ],
  exports: [CategoriesPageComponent]
})
export class CategoriesPageModule {
}
