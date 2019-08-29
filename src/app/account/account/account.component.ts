import {Component, Input, OnInit} from '@angular/core';
import {Account} from "../account";

@Component({
  selector: 'm-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() account: Account;

  constructor() {
  }

  ngOnInit() {
  }
}
