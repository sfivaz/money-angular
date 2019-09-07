import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../../services/token.service";
import * as jwtDecode from "jwt-decode";

@Component({
  selector: 'm-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private tokenService: TokenService) {
  }

  ngOnInit() {
  }

  getFullName() {
    const token = this.tokenService.getToken();
    const authData = jwtDecode(token);
    return authData.user.firstName + ' ' + authData.user.lastName;
  }

  goToHomePage() {
    this.router.navigateByUrl('/');
  }

  goToCategoriesPage() {
    this.router.navigateByUrl('/categories');
  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigateByUrl('/login');
  }
}
