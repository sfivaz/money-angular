import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Account} from "../account/account";

const API = 'http://localhost:3000/accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<Account[]>(API);
  }

  create(account: Account) {
    return this.http.post<Account>(API, account);
  }

  edit(account: Account) {
    return this.http.put<Account>(API + '/' + account.id, account);
  }

  delete(id: number) {
    return this.http.delete(API + '/' + id);
  }
}
