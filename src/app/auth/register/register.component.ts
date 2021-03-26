import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private _fromBuilder: FormBuilder) {
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
      alert('Valid');
    } else {
      Object.keys(this.registerForm.controls).forEach((field) => {
        const mycontrol = this.registerForm.get(field);
        mycontrol?.markAsTouched({ onlySelf: true });
      });
    }
  }
}
