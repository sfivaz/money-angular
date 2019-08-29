import {Component, OnInit, ViewChild} from '@angular/core';
import {Homepage} from "./homepage";
import {AccountFormComponent} from "../account-form/account-form.component";
import {AccountService} from "../services/account.service";

@Component({
  selector: 'm-homepage',
  templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {

  homepage: Homepage;

  @ViewChild(AccountFormComponent, {static: false}) form: AccountFormComponent;

  constructor(private service: AccountService) {
  }

  ngOnInit() {
    this.homepage = new Homepage();
    this.service.findAll().subscribe(accounts => console.log(accounts), console.log);
  }

  openForm() {
    this.form.open();
  }
}
