import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  restAPI: string = 'http://localhost:3000/users';
  constructor(private _httpClient: HttpClient) {}

  registerUser(user: any) {
    return this._httpClient.post(this.restAPI, user);
  }

  getUsers() {
    return this._httpClient.get<any[]>(this.restAPI);
  }

  getUserById(id: number): Observable<any> {
    return this._httpClient.get<any>(this.restAPI + '/' + id);
  }

  getUsersByEmail(email: string) {
    return this._httpClient.get<any[]>(this.restAPI + '?email=' + email);
  }
}
