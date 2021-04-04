import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private _fromBuilder: FormBuilder,
    private _userService: UserService,
    private _router: Router
  ) {
    this.registerForm = this._fromBuilder.group({
      name: ['', Validators.required],
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

  RegisterUser() {
    if (this.registerForm.valid) {


      this._userService
        .getUserbyEmail(this.registerForm.get('email')?.value)
        .subscribe((userData) => {
          console.log(userData[0].email);
          if (userData[0].email == this.registerForm.get('email')?.value) {
            alert('Please use another Email address');

          }
         else {
            this._userService
            .registerUser({
              name: this.registerForm.get('name')?.value,
              email: this.registerForm.get('email')?.value,
              password: this.registerForm.get('password')?.value,
              email_verified_at: new Date(),
              created_at: new Date(),
              updated_at: new Date(),
              api_token: '',
            })
            .subscribe();

          this._router.navigate(['/auth/login']);
          }
        });


    } else {
      Object.keys(this.registerForm.controls).forEach((field) => {
        const mycontrol = this.registerForm.get(field);
        mycontrol?.markAsTouched({ onlySelf: true });
      });
    }
  }
}
