import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Account} from "../account";
import {Router} from "@angular/router";

@Component({
  selector: 'm-account-row',
  templateUrl: './account-row.component.html'
})
export class AccountRowComponent implements OnInit {

  @Input() account: Account;
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  delete() {
    this.onDelete.emit(this.account.id);
  }

  edit() {
    this.onEdit.emit(this.account);
  }

  enter() {
    this.router.navigateByUrl('account/' + this.account.id);
  }
}
