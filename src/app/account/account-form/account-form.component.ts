import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Account} from "../account";
import {AccountService} from "../../services/account.service";
import {AccountBuilderService} from "../../builders/account-builder.service";

@Component({
  selector: 'm-account-form',
  templateUrl: './account-form.component.html'
})
export class AccountFormComponent implements OnInit {

  visible: boolean = false;
  accountForm: FormGroup;
  @Output() onCreate = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  account: Account;

  constructor(private formBuilder: FormBuilder,
              private accountService: AccountService,
              private accountBuilder: AccountBuilderService) {
  }

  ngOnInit() {
    this.account = this.accountBuilder.buildEmpty();
  }

  open(account?: Account) {
    this.visible = true;
    if (account)
      this.account = account;

    this.buildForm();
  }

  close() {
    this.visible = false;
    //TODO use AccountBuilderService
    this.account = this.accountBuilder.buildEmpty();
  }

  updateAccount() {
    const id = this.accountForm.get('id').value;
    if (id)
      this.account.id = id;
    this.account.name = this.accountForm.get('name').value;
    this.account.actualBalance = this.accountForm.get('actualBalance').value || null;
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
      name: [this.account.name || '', Validators.required],
      actualBalance: [this.account.actualBalance || '']
    });
  }

  getTitle(): string {
    return `${this.account.id ? 'edit' : 'create'} account`;
  }
}
