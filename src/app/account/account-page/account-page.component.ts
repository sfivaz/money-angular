import {Component, OnInit, ViewChild} from '@angular/core';
import {Account} from "../account";
import {ActivatedRoute} from "@angular/router";
import {TransactionService} from "../../services/transaction.service";
import {ConfirmDeleteComponent} from "../../shared/confirm-delete/confirm-delete.component";
import {Transaction} from "../../transaction/transaction";
import {TransactionFormComponent} from "../../transaction/transaction-form/transaction-form.component";
import {Category} from "../../category/category";
import {CategoryService} from "../../services/category.service";
import {AccountService} from "../../services/account.service";
import {AccountBuilderService} from "../../builders/account-builder.service";

@Component({
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  account: Account;
  types: string[] = ['', 'spending', 'income', 'transfer'];
  categories: Category[];

  @ViewChild(TransactionFormComponent, {static: false}) form: TransactionFormComponent;
  @ViewChild(ConfirmDeleteComponent, {static: false}) confirm: ConfirmDeleteComponent;

  constructor(private service: TransactionService,
              private accountService: AccountService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private accountBuilder: AccountBuilderService) {
  }

  ngOnInit() {
    this.account = this.accountBuilder.buildEmpty();

    const id = this.activatedRoute.snapshot.params.id;
    this.accountService.find(id)
      .subscribe(account => this.account = account);

    this.categoryService.findAll().subscribe(categories =>
      this.categories = [{id: null, name: null, budget: null}].concat(categories));
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

  filterByType(type) {
    if (type)
      this.account.filterType(type);
    else
      this.account.cleanFilter('type');
  }

  filterByDate(date: string) {
    if (date) {
      //the input type="month" returns the value in this format: YYYY-MM
      //then it's converted to the format [YYYY, MM]
      const dateArray = date.split('-');
      //the -1 is because of the way the month is calculated (0 to 11) instead of 1 to 12
      const month = Number(dateArray[1]) - 1;
      const year = Number(dateArray[0]);
      this.account.filterMonths(month, year);
    } else
      this.account.cleanFilter('month');
  }

  filterByCategory(categoryId, useBudget) {
    categoryId = Number(categoryId);
    if (categoryId) {
      const category = this.categories.find(category => category.id === Number(categoryId));
      this.account.filterCategory(category, useBudget);
    } else
      this.account.cleanFilter('category');
  }

  cleanFilters() {
    this.account.cleanFilter();
  }
}
