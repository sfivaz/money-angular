import {Transaction} from "../transaction/transaction";
import * as moment from "moment";
import {Category} from "../category/category";

export class Account {

  private _id: number;
  private _name: string;
  private _transactions: Transaction[];
  private _balance: number;
  private _budget: number;
  private _actualBalance: number;

  constructor(id, name, transactions, balance, actualBalance) {
    this._id = id;
    this._name = name;
    this._transactions = transactions || [];
    this._balance = Number(balance);
    this._actualBalance = actualBalance;
    this._budget = 0;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get transactions(): Transaction[] {
    return this._transactions;
  }

  set transactions(value: Transaction[]) {
    this._transactions = value;
  }

  get balance() {
    if (this._transactions.length) {
      const reducer = (total, transaction) => total + this.getValue(transaction);
      const balance = this._transactions.reduce(reducer, 0);
      return Number(balance.toFixed(2));
    }
    return this._balance;
  }

  set balance(value) {
    this._balance = Number(value);
  }

  get actualBalance(): number {
    return this._actualBalance;
  }

  set actualBalance(value: number) {
    this._actualBalance = value;
  }

  get balanceDifference() {
    const balanceDifference = this.actualBalance - this.balance;
    return Number(balanceDifference.toFixed(2));
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      actualBalance: this.actualBalance
    };
  }

  /***/

  removeTransactionById(transactionId: number) {
    const index = this.transactions.findIndex(transaction => transaction.id === transactionId);
    this.transactions.splice(index, 1);
  }

  getValue(transaction) {
    switch (transaction.type) {
      case "income":
        return transaction.value;
      case "spending":
        return -1 * transaction.value;
      case "transfer":
        if (this.id === transaction.destinationAccountId)
          return transaction.value;
        if (this.id === transaction.sourceAccountId)
          return -1 * transaction.value;
    }
  }

  get budget(): number {
    return this._budget;
  }

  set budget(value: number) {
    this._budget = value;
  }

  get filteredBalance() {
    const reducer = (total, transaction) => {
      if (transaction.filteredBy.length > 0)
        return total;
      else
        return total + this.getValue(transaction);
    };
    const balanceFiltered = this._transactions.reduce(reducer, 0) + this.budget;
    return Number(balanceFiltered.toFixed(2));
  }

  get filteredTransactions() {
    return this.transactions.filter(transaction => transaction.filteredBy.length === 0);
  }

  filterMonths(month: number, year: number) {
    const date = moment().month(month).year(year);
    const firstDay = date.clone().startOf('month');
    const lastDay = date.clone().endOf('month');

    this._transactions.forEach(transaction => {
      if (moment(transaction.date) < firstDay || moment(transaction.date) > lastDay)
        transaction.addFilter("month");
      else
        transaction.removeFilter("month");
    });
  }

  filterType(type: string) {
    this._transactions.forEach(transaction => {
      if (transaction.type !== type)
        transaction.addFilter("type");
      else
        transaction.removeFilter("type");
    });
  }

  filterCategory(category: Category, useBudget: boolean) {
    this._transactions.forEach(transaction => {
      if (transaction.categoryId !== category.id)
        transaction.addFilter("category");
      else
        transaction.removeFilter("category");
    });
    this.budget = useBudget ? category.budget : 0;
  }

  cleanFilter(filter = null) {
    //TODO filter == null? why not (!filter)
    if (filter == null)
      this.clearAllFilters();
    else
      this._transactions.forEach(transaction => transaction.removeFilter(filter));
    if (filter === "category")
      this.budget = 0;
  }

  clearAllFilters() {
    this._transactions.forEach(transaction => transaction.filteredBy = []);
  }

  orderTransactions() {
    this._transactions.sort((a, b) => b.date.getTime() - a.date.getTime());
  }
}
