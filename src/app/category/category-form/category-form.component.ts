import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../services/category.service";
import {Category} from "../category";

@Component({
  selector: 'm-category-form',
  templateUrl: './category-form.component.html'
})
export class CategoryFormComponent implements OnInit {

  visible: boolean = false;
  categoryForm: FormGroup;
  @Output() onCreate = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  category: Category = {
    id: null,
    name: '',
    budget: null
  };

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  open(category?: Category) {
    this.visible = true;
    if (category)
      this.category = category;

    this.buildForm();
  }

  close() {
    this.visible = false;
    this.category = null;
  }

  updateCategory() {
    this.category.id = this.categoryForm.get('id').value || null;
    this.category.name = this.categoryForm.get('name').value;
    this.category.budget = this.categoryForm.get('budget').value || null;
  }

  submit() {
    this.updateCategory();
    if (this.category.id)
      this.edit();
    else
      this.create();
  }

  create() {
    this.categoryService.create(this.category)
      .subscribe(category => {
        // console.log(category);
        this.onCreate.emit(category);
        this.close();
      });
  }

  edit() {
    this.categoryService.edit(this.category)
      .subscribe(category => {
        this.onEdit.emit(category);
        this.close();
      });
  }

  buildForm() {
    this.categoryForm = this.formBuilder.group({
      id: [this.category.id || ''],
      name: [this.category.name || '', Validators.required],
      budget: [this.category.budget || '']
    });
  }

  getTitle(): string {
    return `${this.category.id ? 'edit' : 'create'} category`;
  }
}
