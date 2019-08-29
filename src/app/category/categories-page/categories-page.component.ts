import {Component, OnInit, ViewChild} from '@angular/core';
import {Category} from "../category";
import {CategoryService} from "../../services/category.service";
import {ConfirmDeleteComponent} from "../../shared/confirm-delete/confirm-delete.component";
import {CategoryFormComponent} from "../category-form/category-form.component";

@Component({
  selector: 'm-categories-page',
  templateUrl: './categories-page.component.html'
})
export class CategoriesPageComponent implements OnInit {

  categories: Category[] = [];

  @ViewChild(CategoryFormComponent, {static: false}) form: CategoryFormComponent;
  @ViewChild(ConfirmDeleteComponent, {static: false}) confirm: ConfirmDeleteComponent;

  constructor(private service: CategoryService) {
  }

  ngOnInit() {
    this.service.findAll().subscribe(categories =>
      this.categories = categories);
  }

  openForm(category?: Category) {
    this.form.open(category);
  }

  openConfirm(id: number) {
    this.confirm.open(id);
  }

  addCategory(category: Category) {
    this.categories.push(category);
  }

  removeCategory(categoryId: number) {
    this.service.delete(categoryId).subscribe(() => {
      const index = this.categories.findIndex(category => category.id === categoryId);
      this.categories.splice(index, 1);
    });
  }
}
