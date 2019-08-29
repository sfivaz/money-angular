import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from "./homepage.component";
import {AccountRowModule} from "../account/account-row/account-row.module";
import {AccountFormModule} from "../account/account-form/account-form.module";
import {ConfirmDeleteModule} from "../shared/confirm-delete/confirm-delete.module";

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    AccountRowModule,
    AccountFormModule,
    ConfirmDeleteModule
  ],
  exports: [HomepageComponent]
})
export class HomepageModule {
}
