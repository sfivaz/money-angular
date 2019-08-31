import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';

import {AccountsPageModule} from "./accounts/accounts-page/accounts-page.module";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AccountPageModule} from "./account/account-page/account-page.module";
import {CategoriesPageModule} from "./categories/categories-page/categories-page.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountsPageModule,
    AccountPageModule,
    CategoriesPageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
