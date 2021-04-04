import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService  {
  restAPI: string = 'http://localhost:3000/orders';
  constructor(private _httpClient : HttpClient) { }


  OrderNewFood(orderData:any){
   return this._httpClient.post(this.restAPI,orderData);
  }


}
