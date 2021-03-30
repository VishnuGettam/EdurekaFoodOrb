import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _fromBuilder: FormBuilder, private _router:Router) {
    this.loginForm = this._fromBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  forgotPassword(){
      this._router.navigate(['auth/forgotpassword']);

  }

  LoginUser() {
    if (this.loginForm.valid) {
      alert('Login Valid')
    } else {
      Object.keys(this.loginForm.controls).forEach((field) => {
        const userControl = this.loginForm.get(field);
        userControl?.markAsTouched({ onlySelf: true });
      });
    }
  }
}
