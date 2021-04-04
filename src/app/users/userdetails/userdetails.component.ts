import { UserService } from './../../services/user.service';
import {  ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  authStatus: any = JSON.parse(sessionStorage.getItem('authStatus') || '{}');
  user: any = {};
  constructor(private _activatedRoute:ActivatedRoute,private _userService:UserService) { }

  ngOnInit(): void {
    const { id } = this._activatedRoute.snapshot.params;
    this._userService.getUserById(id).subscribe((user) => {
      this.user = user;
    });
  }

}
