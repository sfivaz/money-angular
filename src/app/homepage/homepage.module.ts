import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from "./homepage.component";
import {AccountModule} from "../account/account/account.module";
import {AccountFormModule} from "../account/account-form/account-form.module";

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    AccountModule,
    AccountFormModule
  ],
  exports: [HomepageComponent]
})
export class HomepageModule {
}
