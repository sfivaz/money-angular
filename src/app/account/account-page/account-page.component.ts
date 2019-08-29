import {Component, OnInit} from '@angular/core';
import {Account} from "../account";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  account: Account;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.account = this.activatedRoute.snapshot.data.account;
  }
}
