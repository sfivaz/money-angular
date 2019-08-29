import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from "../transaction";

@Component({
  selector: 'm-transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.css']
})
export class TransactionRowComponent implements OnInit {

  @Input() transaction: Transaction;

  constructor() {
  }

  ngOnInit() {
  }

}
