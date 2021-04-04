import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent implements OnInit {
  forgotPassword: FormGroup;
  constructor(private _formBuilder: FormBuilder,private _userService:UserService,private _router:Router) {
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

      var emailEntered = this.forgotPassword.get('email')?.value;
      this._userService.getUsersByEmail(emailEntered).subscribe((receivedData)=>{
        if(receivedData[0] == null){
          alert('No valid email address available');
        }
        else{
          this._userService.UpdateUserbyId(receivedData[0].id,receivedData[0]).subscribe((updatedData)=>{
          alert('Password was reset with '+'"'+ updatedData.password  +'"' );
        this._router.navigate(['auth/login']);
        });
        }
      });

     //this._userService.UpdateUserbyId(1).subscribe();

    } else {
      Object.keys(this.forgotPassword.controls).forEach((field) => {
        const userControl = this.forgotPassword.get(field);
        userControl?.markAsTouched({ onlySelf: true });
      });
    }
  }
}
