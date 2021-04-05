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
  users:any=[]
  constructor(private _httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getFriends().subscribe((data) => {
      this.friends = data;
    });

    this.getUsers().subscribe((userData)=>{
      this.users = userData;
    });

  }

  getFriends() {
    return this._httpClient.get<any[]>(this.restAPI);
  }

  getUsers(){
    return this._httpClient.get<any[]>('http://localhost:3000/users');
  }

}
