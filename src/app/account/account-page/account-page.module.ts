import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountPageComponent} from './account-page.component';

@NgModule({
  declarations: [AccountPageComponent],
  imports: [
    CommonModule
  ],
  exports: [AccountPageComponent]
})
export class AccountPageModule {
}
