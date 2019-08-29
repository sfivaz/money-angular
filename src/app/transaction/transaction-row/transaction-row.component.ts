import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Transaction} from "../transaction";

@Component({
  selector: 'm-transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.css']
})
export class TransactionRowComponent implements OnInit {

  @Input() transaction: Transaction;
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  delete() {
    this.onDelete.emit(this.transaction.id);
  }

  edit() {
    this.onEdit.emit(this.transaction);
  }

}
