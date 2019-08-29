import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../Category/Category";

const API = 'http://localhost:3000/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<Category[]>(API);
  }

  find(id: number) {
    return this.http.get<Category>(API + '/' + id);
  }

  create(Category: Category) {
    return this.http.post<Category>(API, Category);
  }

  edit(category: Category) {
    return this.http.put<Category>(API + '/' + category.id, category);
  }

  delete(id: number) {
    return this.http.delete(API + '/' + id);
  }
}
