import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Category} from "../Category/Category";
import {TokenService} from "./token.service";

const API = 'http://localhost:3000/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  headers: HttpHeaders;

  constructor(private http: HttpClient, private tokenService: TokenService) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenService.getToken()
    });
  }

  findAll() {
    return this.http.get<Category[]>(API, {headers: this.headers});
  }

  find(id: number) {
    return this.http.get<Category>(API + '/' + id, {headers: this.headers});
  }

  create(category: Category) {
    console.log(JSON.stringify(category));
    return this.http.post<Category>(API, category, {headers: this.headers});
  }

  edit(category: Category) {
    return this.http.put<Category>(API + '/' + category.id, category, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(API + '/' + id, {headers: this.headers});
  }
}
