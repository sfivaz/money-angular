import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const API = 'http://localhost:3000/accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get(API);
  }
}
