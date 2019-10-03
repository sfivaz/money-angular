import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransactionFormComponent} from './transaction-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FocusDirective} from "../../shared/directives/focus.directive";

@NgModule({
  declarations: [
    TransactionFormComponent,
    FocusDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [TransactionFormComponent]
})
export class TransactionFormModule {
}
