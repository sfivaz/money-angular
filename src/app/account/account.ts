import {Transaction} from "../transaction/transaction";

export class Account {

  private _id: number;
  private _name: string;
  private _transactions: Transaction[];
  private _balance: number;

  constructor(id, name, transactions, balance) {
    this._id = id;
    this._name = name;
    this._transactions = transactions || [];
    this._balance = Number(balance);
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

  get transactions() {
    return this._transactions;
  }

  set transactions(value) {
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

  removeTransactionById(transactionId: number) {
    const index = this.transactions.findIndex(transaction => transaction.id === transactionId);
    this.transactions.splice(index, 1);
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name
    };
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
}
