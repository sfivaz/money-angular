import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

import {Account} from "../account";
import {AccountService} from "../../services/account.service";

@Injectable({providedIn: 'root'})
export class AccountPageResolver implements Resolve<Observable<Account>> {

  constructor(private service: AccountService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params.id;
    return this.service.find(id);
  }
}
