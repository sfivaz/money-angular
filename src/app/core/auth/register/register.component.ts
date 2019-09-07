import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {TokenService} from "../../../services/token.service";
import {Router} from "@angular/router";
import {User} from "../../user";

@Component({
  selector: 'm-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  failed = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private tokenService: TokenService,
              private route: Router) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register() {
    const user: User = {
      id: null,
      firstName: this.registerForm.get('firstName').value,
      lastName: this.registerForm.get('lastName').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value,
    };

    this.authService.register(user)
      .subscribe(response => {
        if (response.status && response.status == 409)
          this.failed = true;
        else
          this.route.navigateByUrl('/');
      });
  }

  goToLoginPage() {
    this.route.navigateByUrl('/login');
  }
}
