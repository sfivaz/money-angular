import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryRowComponent} from './category-row.component';

@NgModule({
  declarations: [CategoryRowComponent],
  imports: [
    CommonModule
  ], exports: [CategoryRowComponent]
})
export class CategoryRowModule {
}
