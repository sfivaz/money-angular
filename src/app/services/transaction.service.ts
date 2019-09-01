import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Transaction} from "../transaction/transaction";
import {TokenService} from "./token.service";
import {map} from "rxjs/operators";
import {TransactionBuilderService} from "../builders/transaction-builder.service";

const API = 'http://localhost:3000/transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  headers: HttpHeaders;

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private trasnsactionBuilder: TransactionBuilderService) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenService.getToken()
    });
  }

  create(transaction: Transaction) {
    return this.http.post<Transaction>(API, transaction, {headers: this.headers})
      .pipe(map(transactionObj => this.trasnsactionBuilder.build(transactionObj)));
  }

  edit(transaction: Transaction) {
    return this.http.put<Transaction>(API + '/' + transaction.id, transaction, {headers: this.headers})
      .pipe(map(transactionObj => this.trasnsactionBuilder.build(transactionObj)));
  }

  delete(id: number) {
    return this.http.delete(API + '/' + id, {headers: this.headers});
  }
}
