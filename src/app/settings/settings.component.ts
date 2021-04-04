import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  authStatus: any = JSON.parse(sessionStorage.getItem('authStatus') || '{}');
  user: any = {};
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this._userService.getUserById(this.authStatus['id']).subscribe((user) => {
      this.user = user;
    });
  }

}
