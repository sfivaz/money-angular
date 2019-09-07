import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {TokenService} from "../../../services/token.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  failed = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private tokenService: TokenService,
              private route: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.authService.login(email, password).subscribe(response => {
      if (response.status && response.status == 401) {
        this.failed = true;
        this.loginForm.reset();
      } else
        this.route.navigateByUrl('/');
    });
  }
}
