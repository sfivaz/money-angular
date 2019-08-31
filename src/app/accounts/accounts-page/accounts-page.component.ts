import {Component, OnInit, ViewChild} from '@angular/core';
import {Accounts} from "./accounts";
import {AccountFormComponent} from "../../account/account-form/account-form.component";
import {AccountService} from "../../services/account.service";
import {Account} from "../../account/account";
import {ConfirmDeleteComponent} from "../../shared/confirm-delete/confirm-delete.component";

@Component({
  templateUrl: './accounts-page.component.html'
})
export class AccountsPageComponent implements OnInit {

  homepage: Accounts = new Accounts();

  @ViewChild(AccountFormComponent, {static: false}) form: AccountFormComponent;
  @ViewChild(ConfirmDeleteComponent, {static: false}) confirm: ConfirmDeleteComponent;

  constructor(private service: AccountService) {
  }

  ngOnInit() {
    this.service.findAll().subscribe(accounts => {
      this.homepage.accounts = this.homepage.accounts.concat(accounts);
      console.log(this.homepage.accounts);
    }, console.log);
  }

  openForm(account?: Account) {
    this.form.open(account);
  }

  openConfirm(id: number) {
    this.confirm.open(id);
  }

  addAccount(account: Account) {
    this.homepage.accounts.push(account);
  }

  removeAccount(accountId: number) {
    this.service.delete(accountId).subscribe(() =>
      this.homepage.removeAccountById(accountId));
  }
}
