import {Account} from "../account/account";

export class Homepage {
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

  get totalFixed() {
    return this.total.toFixed(2);
  }

  get total(): number {
    return this._accounts.reduce((total, account) =>
      total + account.balance, 0);
  }
}
