import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const API = 'http://localhost:3000/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(user) {
    return this.http.post<any>(API, user);
  }
}
