import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountPageComponent} from './account-page.component';
import {NavbarModule} from "../../shared/navbar/navbar.module";
import {TransactionRowModule} from "../../transaction/transaction-row/transaction-row.module";

@NgModule({
  declarations: [AccountPageComponent],
  imports: [
    CommonModule,
    NavbarModule,
    TransactionRowModule
  ],
  exports: [AccountPageComponent]
})
export class AccountPageModule {
}
