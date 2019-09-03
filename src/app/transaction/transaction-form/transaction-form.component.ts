import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Transaction} from "../transaction";
import {TransactionService} from "../../services/transaction.service";
import {Category} from "../../category/category";
import {CategoryService} from "../../services/category.service";
import {AccountService} from "../../services/account.service";
import {Account} from "../../account/account";
import * as moment from "moment";
import {TransactionBuilderService} from "../../builders/transaction-builder.service";

@Component({
  selector: 'm-transaction-form',
  templateUrl: './transaction-form.component.html'
})
export class TransactionFormComponent implements OnInit {

  @Input() currentAccountId: number;
  visible: boolean = false;
  transactionForm: FormGroup;
  @Output() onCreate = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  transaction: Transaction;
  types: string[] = ['spending', 'income', 'transfer'];
  categories: Category[] = [];
  accounts: Account[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: TransactionService,
    private categoryService: CategoryService,
    private accountService: AccountService,
    private transactionBuilder: TransactionBuilderService) {
  }

  ngOnInit() {
    this.transaction = this.transactionBuilder.buildEmpty();
    this.categoryService.findAll()
      .subscribe(categories => this.categories = categories);
    this.accountService.findAll()
      .subscribe(accounts => this.accounts = accounts);
  }

  open(transaction?: Transaction) {
    this.visible = true;
    if (transaction)
      this.transaction = transaction;

    this.buildForm();
  }

  buildForm() {
    const date = this.transaction.date || new Date();
    const dateString = moment(date).format('YYYY-MM-DD');

    this.transactionForm = this.formBuilder.group({
      id: [this.transaction.id || null],
      description: [this.transaction.description || ''],
      value: [this.transaction.value || '', Validators.required],
      isMonthly: [this.transaction.isMonthly || ''],
      date: [dateString, Validators.required],
      type: [this.transaction.type || this.types[0]],
      categoryId: [this.transaction.categoryId || this.categories[0].id],
      sourceAccountId: [this.transaction.sourceAccountId || this.currentAccountId],
      destinationAccountId: [this.transaction.destinationAccountId || null]
    });
  }

  close() {
    this.visible = false;
    this.transaction = this.transactionBuilder.buildEmpty();
  }

  updateTransaction() {
    this.transaction.id = this.transactionForm.get('id').value || null;
    this.transaction.description = this.transactionForm.get('description').value;
    this.transaction.value = this.transactionForm.get('value').value || 0;
    const dateString = this.transactionForm.get('date').value;
    this.transaction.date = new Date(dateString);
    this.transaction.type = this.transactionForm.get('type').value;
    this.transaction.isMonthly = this.transactionForm.get('isMonthly').value || false;
    this.transaction.categoryId = this.transactionForm.get('categoryId').value;
    this.transaction.sourceAccountId = this.transactionForm.get('sourceAccountId').value;
    this.transaction.destinationAccountId = this.transactionForm.get('destinationAccountId').value;
  }

  submit() {
    this.updateTransaction();
    if (this.transaction.id)
      this.edit();
    else
      this.create();
  }

  create() {
    this.service.create(this.transaction)
      .subscribe(transactions => {
        this.onCreate.emit(transactions);
        this.close();
      });
  }

  edit() {
    this.service.edit(this.transaction)
      .subscribe(transactions => {
        this.onEdit.emit(transactions);
        this.close();
      });
  }

  getTitle(): string {
    return `${this.transaction.id ? 'edit' : 'create'} transaction`;
  }
}
