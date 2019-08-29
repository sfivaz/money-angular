import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountPageComponent} from './account-page.component';
import {NavbarModule} from "../../shared/navbar/navbar.module";
import {TransactionRowModule} from "../../transaction/transaction-row/transaction-row.module";
import {ConfirmDeleteModule} from "../../shared/confirm-delete/confirm-delete.module";
import {TransactionFormModule} from "../../transaction/transaction-form/transaction-form.module";

@NgModule({
  declarations: [AccountPageComponent],
  imports: [
    CommonModule,
    NavbarModule,
    TransactionRowModule,
    ConfirmDeleteModule,
    TransactionFormModule
  ],
  exports: [AccountPageComponent]
})
export class AccountPageModule {
}
