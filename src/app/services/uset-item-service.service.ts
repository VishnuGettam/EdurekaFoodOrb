import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsetItemServiceService {
  restAPI: string = 'http://localhost:3000/feed';
  constructor(private _httpClient: HttpClient) {}

  getUserItems() {
    return this._httpClient.get<any[]>(this.restAPI);
  }
  getUserItembyId(itemId: number) {
    return this._httpClient.get<any>(this.restAPI + '/' + itemId);
  }
}
