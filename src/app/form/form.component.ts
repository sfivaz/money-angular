import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'm-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

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
