import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../category";

@Component({
  selector: 'm-category-row',
  templateUrl: './category-row.component.html'
})
export class CategoryRowComponent implements OnInit {

  @Input() category: Category;

  constructor() {
  }

  ngOnInit() {
  }
}
