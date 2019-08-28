import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from "./homepage.component";
import {FormComponent} from "../form/form.component";

@NgModule({
  declarations: [HomepageComponent, FormComponent],
  imports: [
    CommonModule
  ],
  exports: [HomepageComponent]
})
export class HomepageModule {
}
