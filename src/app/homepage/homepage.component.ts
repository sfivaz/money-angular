import {Component, OnInit, ViewChild} from '@angular/core';
import {Homepage} from "./homepage";
import {AccountFormComponent} from "../account-form/account-form.component";

@Component({
  selector: 'm-homepage',
  templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {

  homepage: Homepage;

  @ViewChild(AccountFormComponent, {static: false}) form: AccountFormComponent;

  constructor() {
  }

  ngOnInit() {
    this.homepage = new Homepage();
  }

  openForm() {
    this.form.open();
  }
}
