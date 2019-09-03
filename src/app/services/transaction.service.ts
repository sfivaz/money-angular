import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Transaction} from "../transaction/transaction";
import {TokenService} from "./token.service";
import {map} from "rxjs/operators";
import {TransactionBuilderService} from "../builders/transaction-builder.service";
import {API} from "../helpers/API";

const API_URL = API + '/transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  headers: HttpHeaders;

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private transactionBuilder: TransactionBuilderService) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenService.getToken()
    });
  }

  create(transaction: Transaction) {
    return this.http.post<Transaction>(API_URL, transaction, {headers: this.headers})
      .pipe(map(transactionsObj => this.transactionBuilder.buildMany(transactionsObj)));
  }

  edit(transaction: Transaction) {
    return this.http.put<Transaction>(API_URL + '/' + transaction.id, transaction, {headers: this.headers})
      .pipe(map(transactionsObj => this.transactionBuilder.buildMany(transactionsObj)));
  }

  delete(id: number) {
    return this.http.delete(API_URL + '/' + id, {headers: this.headers});
  }
}
