import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  authStatus: any = JSON.parse(sessionStorage.getItem('authStatus') || '{}');
  restAPI: string = 'http://localhost:3000/orders';
  orders: any = [];

  constructor(private _httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }

  getOrders() {
    return this._httpClient.get<any[]>(this.restAPI);
  }

}
