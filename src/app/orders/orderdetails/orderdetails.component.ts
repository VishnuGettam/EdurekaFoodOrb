import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css'],
})
export class OrderdetailsComponent implements OnInit {
  authStatus: any = JSON.parse(sessionStorage.getItem('authStatus') || '{}');
  restAPI: string = 'http://localhost:3000/orders';
  order: any = {};
  timeLeft: number = 10;
  interval: any;
  orderpick: boolean = false;
  orderdelivered: boolean = false;
  orderStatus: string = 'Placed';
  displayOrder:boolean = true;

  constructor(
    private _httpClient: HttpClient,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const { id } = this._activatedRoute.snapshot.params;
    this.getOrderById(id).subscribe((order) => {
      this.order = order;
    });
  }

  getOrderById(id: number): Observable<any> {
    return this._httpClient.get<any>(this.restAPI + '/' + id);
  }

  PlaceOrder(id:number) {
    this.displayOrder = false;

    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;

        if (this.timeLeft == 5) {
          this.orderpick = true;
          this.orderStatus = 'Picked up';
        }

        if (this.timeLeft == 0) {
          this.orderdelivered = true;
          this.pauseTimer();
          this.orderStatus = 'Delivered';
          this.RemoveOrder(id);
        }
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  RemoveOrder(id:number){
    this._httpClient.delete<any>(this.restAPI + '/' + id).subscribe();
  }
}
