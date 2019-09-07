import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {TokenService} from "./token.service";
import {environment} from '../../environments/environment';
import {User} from "../core/user";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  login(email, password) {
    return this.http.post<any>(API_URL + '/login', {email, password})
      .pipe(tap(res => {
        if (res.token)
          this.tokenService.setToken(res.token);
      }))
  }

  register(user: User) {
    return this.http.post<any>(API_URL + '/register', user)
      .pipe(tap(res => {
        if (res.token)
          this.tokenService.setToken(res.token);
      }))
  }
}
