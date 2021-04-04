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

  UpdateUserbyId(id:number,data:any){
    var definedURl = this.restAPI + '/' + id ;
    console.log(definedURl);
   return  this._httpClient.put<any>(this.restAPI + '/' + id,{
        "id":id,
       "name": data.name,
        "email":data.email,
        "password": "test",
        "email_verified_at": null,
        "created_at": "2020-04-26T17:02:45.000000Z",
        "updated_at": new Date(),
        "api_token": null
    })
  }

getUserbyEmail(email:string){

   return this._httpClient.get<any>(this.restAPI,{
      params:{
        "email":email
      }
    });
}

}
