import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(private _userService:UserService) { }


  login(email: string, password: string) {
    console.log('Hello from Login');
    console.log(email);


    if (this.isloggedIn()) {
      sessionStorage.removeItem('authStatus');
    }
    this._userService.getUsersByEmail(email).subscribe((users) => {
      console.log('Final');
      console.log(users[0].email);
      console.log(users[0].pasword);
      if (password == users[0].password) {

        sessionStorage.setItem(
          'authStatus',
          JSON.stringify({
            status: true,
            id: users[0].id,
            name: users[0].name,
            email: users[0].email,
          })
        );
      }
    });
  }

  isloggedIn() {
    let status: string = sessionStorage.getItem('authStatus') || '';
    if (status != '' && JSON.parse(status)['status']) {
      return true;
    } else {
      return false;
    }
  }
}
