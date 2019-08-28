import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from "./homepage.component";
import {AccountFormComponent} from "../account-form/account-form.component";

@NgModule({
  declarations: [HomepageComponent, AccountFormComponent],
  imports: [
    CommonModule
  ],
  exports: [HomepageComponent]
})
export class HomepageModule {
}
