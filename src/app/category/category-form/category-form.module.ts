import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryFormComponent} from './category-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [CategoryFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CategoryFormComponent]
})
export class CategoryFormModule {
}
