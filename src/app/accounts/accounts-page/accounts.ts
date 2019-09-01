import {Account} from "../../account/account";

export class Accounts {
  private _accounts: Account[];

  constructor() {
    this._accounts = [];
  }

  get accounts(): Account[] {
    return this._accounts;
  }

  set accounts(value: Account[]) {
    this._accounts = value;
  }

  get total(): number {
    const total = this._accounts.reduce((total, account) => total + account.balance, 0);
    return Number(total.toFixed(2));
  }

  get totalActualBalance() {
    return this._accounts.reduce((total, account) => total + account.actualBalance, 0);
  }

  get totalDifference() {
    const totalDifference = this.totalActualBalance - this.total;
    return Number(totalDifference.toFixed(2));
  }

  removeAccountById(accountId: number) {
    const index = this.accounts.findIndex(account => account.id === accountId);
    this.accounts.splice(index, 1);
  }
}
