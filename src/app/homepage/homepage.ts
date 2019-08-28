export class Homepage {
  private _accounts: any[];

  constructor() {
    this._accounts = [];
  }

  get accounts(): any[] {
    return this._accounts;
  }

  set accounts(value: any[]) {
    this._accounts = value;
  }

  get totalFixed() {
    return this.total.toFixed(2);
  }

  get total() {
    return this._accounts.reduce((total, account) =>
      total + account.balance, 0);
  }
}
