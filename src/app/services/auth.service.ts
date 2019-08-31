import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {TokenService} from "./token.service";

const API = 'http://localhost:3000/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  login(email, password) {
    return this.http.post<any>(API, {email, password})
      .pipe(tap(res => {
        if (res.token)
          this.tokenService.setToken(res.token);
      }))
  }
}
