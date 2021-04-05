import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent implements OnInit {
  authStatus: any = JSON.parse(sessionStorage.getItem('authStatus') || '{}');
  restAPI: string = 'http://localhost:3000/friends';
  friends: any = [];
  users: any = [];
  constructor(private _httpClient: HttpClient) {}



  ngOnInit(): void {

    this.getFriends().subscribe((data) => {
      this.friends = data;
    });
    this.getFriendSuggestions().subscribe((userData) => {
      userData.slice().forEach((uD) => {
        if (uD.name != 'Divya') {
          this.users.push(uD);
        }
      });
    });
  }

  getFriends() {
    return this._httpClient.get<any[]>(this.restAPI);
  }

  getFriendSuggestions() {
    return this._httpClient.get<any[]>('http://localhost:3000/friendsug');
  }

  AddFriends(userName: any) {
    console.log(userName.id);
    this._httpClient.post(this.restAPI, userName).subscribe();
    this._httpClient.delete<any>('http://localhost:3000/friendsug'+'/'+ userName.id).subscribe();
    window.location.href = window.location.href;
  }
}
