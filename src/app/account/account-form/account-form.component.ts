import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'm-account-form',
  templateUrl: './account-form.component.html'
})
export class AccountFormComponent implements OnInit {

  title: string = 'create account';
  visible: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  open() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }
}
