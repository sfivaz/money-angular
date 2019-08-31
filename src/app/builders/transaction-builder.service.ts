import {Injectable} from '@angular/core';
import {Transaction} from "../transaction/transaction";

@Injectable({
  providedIn: 'root'
})
export class TransactionBuilderService {

  constructor() {
  }

  buildMany(transactionsObj) {
    return transactionsObj.map(transactionObj => this.build(transactionObj));
  }

  build(transactionObj) {
    const transaction = new Transaction(null,
      null,
      null,
      null,
      null,
      null,
      null,
      null);
    return Object.assign(transaction, transactionObj);
  }
}
