import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountsPageComponent} from "./accounts-page.component";
import {AccountRowModule} from "../../account/account-row/account-row.module";
import {AccountFormModule} from "../../account/account-form/account-form.module";
import {ConfirmDeleteModule} from "../../shared/confirm-delete/confirm-delete.module";
import {NavbarModule} from "../../shared/navbar/navbar.module";

@NgModule({
  declarations: [AccountsPageComponent],
  imports: [
    CommonModule,
    AccountRowModule,
    AccountFormModule,
    ConfirmDeleteModule,
    NavbarModule
  ]
})
export class AccountsPageModule {
}
