import {Account} from "../account/account";

export class Homepage {
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
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  get totalFixed() {
    return this.total.toFixed(2);
  }

  removeAccountById(accountId: number) {
    const index = this.accounts.findIndex(account => account.id === accountId);
    this.accounts.splice(index, 1);
  }
}
