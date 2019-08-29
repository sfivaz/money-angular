import {Component, OnInit} from '@angular/core';
import {Category} from "../category";

@Component({
  selector: 'm-categories-page',
  templateUrl: './categories-page.component.html'
})
export class CategoriesPageComponent implements OnInit {

  categories: Category[] = [];

  constructor() {
  }

  ngOnInit() {
  }
}
