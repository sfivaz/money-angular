import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const API = 'http://localhost:3000/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email, password) {
    return this.http.post<any>(API, {email, password});
  }
}
