import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Account} from "../account";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'm-account-form',
  templateUrl: './account-form.component.html'
})
export class AccountFormComponent implements OnInit {

  visible: boolean = false;
  accountForm: FormGroup;
  @Output() onCreate = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  account: Account = new Account(null, null, null, null);

  constructor(private formBuilder: FormBuilder, private accountService: AccountService) {
  }

  ngOnInit() {
  }

  open(account?: Account) {
    this.visible = true;
    if (account)
      this.account = account;

    this.buildForm();
  }

  close() {
    this.visible = false;
    this.account = new Account(null, null, null, null);
  }

  updateAccount() {
    const id = this.accountForm.get('id').value;
    if (id)
      this.account.id = id;
    this.account.name = this.accountForm.get('name').value;
  }

  submit() {
    this.updateAccount();
    if (this.account.id)
      this.edit();
    else
      this.create();
  }

  create() {
    this.accountService.create(this.account)
      .subscribe(account => {
        this.onCreate.emit(account);
        this.close();
      });
  }

  edit() {
    this.accountService.edit(this.account)
      .subscribe(account => {
        this.onEdit.emit(account);
        this.close();
      });
  }

  buildForm() {
    this.accountForm = this.formBuilder.group({
      id: [this.account.id || ''],
      name: [this.account.name || '', Validators.required]
    });
  }

  getTitle(): string {
    return `${this.account.id ? 'edit' : 'create'} account`;
  }
}