import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountFormComponent} from "./account-form.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AccountFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [AccountFormComponent]
})
export class AccountFormModule {
}
