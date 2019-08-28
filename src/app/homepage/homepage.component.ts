import {Component, OnInit, ViewChild} from '@angular/core';
import {Homepage} from "./homepage";
import {FormComponent} from "../form/form.component";

@Component({
  selector: 'm-homepage',
  templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {

  homepage: Homepage;

  @ViewChild('test', {static: false}) form;

  constructor() {
  }

  ngOnInit() {
    this.homepage = new Homepage();
  }

  openForm() {
    this.form.open();
  }
}
