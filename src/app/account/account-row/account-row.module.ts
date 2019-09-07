import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountRowComponent} from "./account-row.component";

@NgModule({
  declarations: [AccountRowComponent],
  imports: [
    CommonModule,
  ],
  exports: [AccountRowComponent]
})
export class AccountRowModule {
}
