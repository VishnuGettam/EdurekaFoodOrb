import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent implements OnInit {
  forgotPassword: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
    this.forgotPassword = this._formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
    });
  }

  ngOnInit(): void {}
  ForgotPassword() {
    if (this.forgotPassword.valid) {
      alert('valid')
    } else {
      Object.keys(this.forgotPassword.controls).forEach((field) => {
        const userControl = this.forgotPassword.get(field);
        userControl?.markAsTouched({ onlySelf: true });
      });
    }
  }
}
