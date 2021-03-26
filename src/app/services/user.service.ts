import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  restAPI: string = 'http://localhost:3000/users';
  constructor( private _httpClient :HttpClient ) {


   }

   registerUser(user:any){
     return this._httpClient.post(this.restAPI,user);
   }


}
