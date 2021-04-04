import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  authStatus: any = JSON.parse(sessionStorage.getItem('authStatus') || '{}');
  restAPI: string = 'http://localhost:3000/friends';
  friends: any = [];
  constructor(private _httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getFriends().subscribe((data) => {
      this.friends = data;
    });
  }

  getFriends() {
    return this._httpClient.get<any[]>(this.restAPI);
  }

}
