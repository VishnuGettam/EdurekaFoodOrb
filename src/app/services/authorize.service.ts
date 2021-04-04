import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(private _userService:UserService) { }


  login(email: string, password: string) {
    if (this.isloggedIn()) {
      sessionStorage.removeItem('authStatus');
    }
    this._userService.getUsersByEmail(email).subscribe((users) => {
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
    let status: string = localStorage.getItem('authStatus') || '';
    if (status != '' && JSON.parse(status)['status']) {
      return true;
    } else {
      return false;
    }
  }
}
