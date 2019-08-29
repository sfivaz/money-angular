import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from "../category";

@Component({
  selector: 'm-category-row',
  templateUrl: './category-row.component.html'
})
export class CategoryRowComponent implements OnInit {

  @Input() category: Category;
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  delete() {
    this.onDelete.emit(this.category.id);
  }

  edit() {
    this.onEdit.emit(this.category);
  }
}
