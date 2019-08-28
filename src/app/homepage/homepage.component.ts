import {Component, OnInit} from '@angular/core';
import {Homepage} from "./homepage";

@Component({
  selector: 'm-homepage',
  templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {

  homepage: Homepage;

  constructor() {
  }

  ngOnInit() {
    this.homepage = new Homepage();
  }


}
