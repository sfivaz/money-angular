import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from "./homepage.component";
import {AccountFormComponent} from "../account/account-form/account-form.component";
import {AccountModule} from "../account/account/account.module";

@NgModule({
  declarations: [HomepageComponent, AccountFormComponent],
  imports: [
    CommonModule,
    AccountModule
  ],
  exports: [HomepageComponent]
})
export class HomepageModule {
}
