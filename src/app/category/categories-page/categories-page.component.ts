import {Component, OnInit} from '@angular/core';
import {Category} from "../category";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'm-categories-page',
  templateUrl: './categories-page.component.html'
})
export class CategoriesPageComponent implements OnInit {

  categories: Category[] = [];

  constructor(private service: CategoryService) {
  }

  ngOnInit() {
    this.service.findAll().subscribe(categories =>
      this.categories = categories);
  }
}
