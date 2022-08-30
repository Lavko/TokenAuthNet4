import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators,} from '@angular/forms';
import {MyErrorStateMatcher} from '../helpers/error-state-matcher';
import {passwordValidator} from '../helpers/password.validator';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  public loginForm!: FormGroup;
  public matcher = new MyErrorStateMatcher();

  constructor(
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [Validators.required, passwordValidator()]),
    });
  }

  public onSubmit() {
    this.authenticationService.login(
      this.loginForm.get('username')!.value,
      this.loginForm!.get('password')!.value
    );
  }
}
