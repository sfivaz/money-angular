import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Account} from "../account";

@Component({
  selector: 'm-account-row',
  templateUrl: './account-row.component.html',
  styleUrls: ['./account-row.component.css']
})
export class AccountRowComponent implements OnInit {

  @Input() account: Account;
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  delete() {
    this.onDelete.emit(this.account.id);
  }

  edit() {
    this.onEdit.emit(this.account);
  }
}
