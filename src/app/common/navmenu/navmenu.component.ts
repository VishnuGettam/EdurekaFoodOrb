import { HttpClient } from '@angular/common/http';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css'],
})
export class NavmenuComponent implements OnInit, DoCheck {
  authStatus: string = sessionStorage.getItem('authStatus') || '';
  restAPI: string = 'http://localhost:3000/orders';
  orders: any = [];

  constructor(private _router: Router,private _httpClient : HttpClient) {}
  ngDoCheck(): void {
    this.authStatus = sessionStorage.getItem('authStatus') || '';
  }

  ngOnInit(): void {

    this.getOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }

  logout() {
    sessionStorage.removeItem('authStatus');
    window.location.href = window.location.href;
  }


  getOrders() {
    return this._httpClient.get<any[]>(this.restAPI);
  }


}
