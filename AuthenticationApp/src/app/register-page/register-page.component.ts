import {AuthenticationService} from './../services/authentication.service';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../helpers/error-state-matcher';
import {passwordValidator} from '../helpers/password.validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  public registerForm!: FormGroup;
  public matcher = new MyErrorStateMatcher();

  constructor(
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, passwordValidator()]),
    });
  }

  public onSubmit() {
    this.authenticationService
      .register(
        this.registerForm.get('username')!.value,
        this.registerForm.get('email')!.value,
        this.registerForm!.get('password')!.value
      )
  }
}
