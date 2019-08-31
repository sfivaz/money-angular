import {Component, OnInit, ViewChild} from '@angular/core';
import {Account} from "../account";
import {ActivatedRoute} from "@angular/router";
import {TransactionService} from "../../services/transaction.service";
import {ConfirmDeleteComponent} from "../../shared/confirm-delete/confirm-delete.component";
import {Transaction} from "../../transaction/transaction";
import {TransactionFormComponent} from "../../transaction/transaction-form/transaction-form.component";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  account: Account;
  types: string[] = ['', 'spending', 'income', 'transfer'];

  @ViewChild(TransactionFormComponent, {static: false}) form: TransactionFormComponent;
  @ViewChild(ConfirmDeleteComponent, {static: false}) confirm: ConfirmDeleteComponent;

  constructor(private activatedRoute: ActivatedRoute, private service: TransactionService) {
  }

  ngOnInit() {
    const accountObj = this.activatedRoute.snapshot.data.account;
    console.log(accountObj);
    //TODO use Object assign maybe
    this.account = new Account(accountObj.id, accountObj.name, accountObj.transactions, accountObj.balance);
  }

  openForm(transaction?: Transaction) {
    this.form.open(transaction);
  }

  openConfirm(id: number) {
    this.confirm.open(id);
  }

  addTransaction(transaction: Transaction) {
    this.account.transactions.push(transaction);
  }

  removeTransaction(transactionId: number) {
    this.service.delete(transactionId).subscribe(() =>
      this.account.removeTransactionById(transactionId));
  }

  getFilteredTransactions() {
    return this.account.transactions.filter(transaction => transaction.filteredBy.length === 0);
  }

  filterByType(type) {
    this.account.filterType(type);
  }
}
