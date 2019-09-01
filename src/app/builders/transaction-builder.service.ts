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
    const transaction = this.buildEmpty();
    return Object.assign(transaction, transactionObj);
  }

  buildEmpty() {
    return new Transaction(null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null);
  }
}
