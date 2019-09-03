import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Transaction} from "../transaction";

@Component({
  selector: 'm-transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.css']
})
export class TransactionRowComponent implements OnInit {

  @Input() currentAccountId: number;
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

  getRowClass() {
    return 'template-row transaction-grid align-items-center ' + this.getColor();
  }

  getColor() {
    if (this.transaction.type === "transfer") {
      if (this.transaction.sourceAccountId === this.currentAccountId)
        return "clr-transfer-source";
      else
        return "clr-transfer-destiny";
    } else
      return " clr-" + this.transaction.type.toLowerCase();
  }

}
