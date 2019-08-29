import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'm-account-form',
  templateUrl: './account-form.component.html'
})
export class AccountFormComponent implements OnInit {

  title: string = 'create account';
  visible: boolean = false;
  accountForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
}
