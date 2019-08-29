import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";
import {AccountPageComponent} from "./account/account-page/account-page.component";
import {AccountPageResolver} from "./account/account-page/account-page.resolver";

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'account/:id',
    component: AccountPageComponent,
    resolve: {account: AccountPageResolver}
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
