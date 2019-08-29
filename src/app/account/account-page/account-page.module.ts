import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountPageComponent} from './account-page.component';
import {NavbarModule} from "../../shared/navbar/navbar.module";

@NgModule({
  declarations: [AccountPageComponent],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [AccountPageComponent]
})
export class AccountPageModule {
}
