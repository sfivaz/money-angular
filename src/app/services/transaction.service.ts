import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Transaction} from "../transaction/transaction";

const API = 'http://localhost:3000/transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) {
  }
  
  create(transaction: Transaction) {
    return this.http.post<Transaction>(API, transaction);
  }

  edit(transaction: Transaction) {
    return this.http.put<Transaction>(API + '/' + transaction.id, transaction);
  }

  delete(id: number) {
    return this.http.delete(API + '/' + id);
  }
}
