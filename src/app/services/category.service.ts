import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenService} from "./token.service";
import {API} from "../helpers/API";
import {Category} from "../category/category";

const API_URL = API + '/categories';

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
    return this.http.get<Category[]>(API_URL, {headers: this.headers});
  }

  find(id: number) {
    return this.http.get<Category>(API_URL + '/' + id, {headers: this.headers});
  }

  create(category: Category) {
    // console.log(JSON.stringify(category));
    return this.http.post<Category>(API_URL, category, {headers: this.headers});
  }

  edit(category: Category) {
    return this.http.put<Category>(API_URL + '/' + category.id, category, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(API_URL + '/' + id, {headers: this.headers});
  }
}
