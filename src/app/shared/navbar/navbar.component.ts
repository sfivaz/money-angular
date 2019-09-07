import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../../services/token.service";
import * as jwtDecode from "jwt-decode";
import {User} from "../../core/user";

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
    const user = <User>jwtDecode(token).user;
    return `${user.firstName} ${user.lastName}`;
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
