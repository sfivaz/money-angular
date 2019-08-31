import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'm-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private tokenService: TokenService) {
  }

  ngOnInit() {
  }

  goToAccountsPage() {
    this.router.navigateByUrl('home');
  }

  goToCategoriesPage() {
    this.router.navigateByUrl('categories');
  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigateByUrl('');
  }
}
