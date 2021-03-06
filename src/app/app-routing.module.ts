import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AccountsPageComponent} from "./accounts/accounts-page/accounts-page.component";
import {AccountPageComponent} from "./account/account-page/account-page.component";
import {CategoriesPageComponent} from "./categories/categories-page/categories-page.component";
import {LoginComponent} from "./core/auth/login/login.component";
import {AuthGuard} from "./core/guards/auth.guard";
import {GuestGuard} from "./core/guards/guest.guard";
import {RegisterComponent} from "./core/auth/register/register.component";

const routes: Routes = [
  {
    path: '',
    component: AccountsPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'account/:id',
    component: AccountPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'categories',
    component: CategoriesPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [GuestGuard]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
