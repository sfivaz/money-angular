import {Injectable} from '@angular/core';
import {Account} from "../account/account";
import {TransactionBuilderService} from "./transaction-builder.service";

@Injectable({
  providedIn: 'root'
})
export class AccountBuilderService {

  constructor(private transactionBuilder: TransactionBuilderService) {
  }

  buildMany(accountsObj) {
    return accountsObj.map(accountObj => this.build(accountObj));
  }

  build(accountObj) {
    let transactions = [];
    if (accountObj.transactions)
      transactions = this.transactionBuilder.buildMany(accountObj.transactions);
    return new Account(accountObj.id, accountObj.name, transactions, accountObj.balance, accountObj.actualBalance);
  }

  buildEmpty(){
    return new Account(null, null, null, null, null);
  }
}
