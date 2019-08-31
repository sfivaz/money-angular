import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Account} from "../account/account";
import {TokenService} from "./token.service";

const API = 'http://localhost:3000/accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  headers: HttpHeaders;

  constructor(private http: HttpClient, private tokenService: TokenService) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenService.getToken()
    });
  }

  findAll() {
    return this.http.get<Account[]>(API, {headers: this.headers});
  }

  find(id: number) {
    return this.http.get<Account>(API + '/' + id, {headers: this.headers});
  }

  create(account: Account) {
    return this.http.post<Account>(API, account, {headers: this.headers});
  }

  edit(account: Account) {
    return this.http.put<Account>(API + '/' + account.id, account, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(API + '/' + id, {headers: this.headers});
  }
}
