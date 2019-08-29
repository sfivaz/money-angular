import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Account} from "../account";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'm-account-form',
  templateUrl: './account-form.component.html'
})
export class AccountFormComponent implements OnInit {

  title: string = 'create account';
  visible: boolean = false;
  accountForm: FormGroup;
  @Output() onCreate = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private accountService: AccountService) {
  }

  ngOnInit() {
    this.accountForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  open() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

  buildAccount() {
    const name = this.accountForm.get('name').value;
    return new Account(null, name, null, null);
  }

  submit() {
    const account = this.buildAccount();
    this.accountService.create(account)
      .subscribe(account => {
        this.onCreate.emit(account);
        this.visible = false;
      });
  }
}
