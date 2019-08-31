import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AccountsPageComponent} from "./accounts/accounts-page/accounts-page.component";
import {AccountPageComponent} from "./account/account-page/account-page.component";
import {AccountPageResolver} from "./account/account-page/account-page.resolver";
import {CategoriesPageComponent} from "./categories/categories-page/categories-page.component";

const routes: Routes = [
  {
    path: '',
    component: AccountsPageComponent
  },
  {
    path: 'account/:id',
    component: AccountPageComponent,
    resolve: {account: AccountPageResolver}
  },
  {
    path: 'categories',
    component: CategoriesPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
