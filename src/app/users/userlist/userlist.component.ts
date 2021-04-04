import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  authStatus: any = JSON.parse(sessionStorage.getItem('authStatus') || '{}');
  users: any = [];
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this._userService.getUsers().subscribe((userlist) => {
      this.users = userlist;
    });
  }
}
