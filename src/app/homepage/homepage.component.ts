import {Component, OnInit, ViewChild} from '@angular/core';
import {Homepage} from "./homepage";
import {AccountFormComponent} from "../account/account-form/account-form.component";
import {AccountService} from "../services/account.service";
import {Account} from "../account/account";

@Component({
  selector: 'm-homepage',
  templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {

  homepage: Homepage = new Homepage();

  @ViewChild(AccountFormComponent, {static: false}) form: AccountFormComponent;

  constructor(private service: AccountService) {
  }

  ngOnInit() {
    this.service.findAll().subscribe(accounts => {
      this.homepage.accounts = this.homepage.accounts.concat(accounts);
      console.log(this.homepage.accounts);
    }, console.log);
  }

  openForm() {
    this.form.open();
  }

  addAccount(account: Account) {
    this.homepage.accounts.push(account);
  }
}
