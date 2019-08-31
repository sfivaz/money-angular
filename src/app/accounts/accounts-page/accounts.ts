import {Account} from "../../account/account";

export class Accounts {
  private _accounts: Account[];
  private _total: number;

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
    return Number(this._total.toFixed(2));
  }

  set total(value: number) {
    this._total = value;
  }

  removeAccountById(accountId: number) {
    const index = this.accounts.findIndex(account => account.id === accountId);
    this.accounts.splice(index, 1);
  }
}
