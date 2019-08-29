import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountFormComponent} from "./account-form.component";

@NgModule({
  declarations: [AccountFormComponent],
  imports: [
    CommonModule
  ],
  exports: [AccountFormComponent]
})
export class AccountFormModule {
}
