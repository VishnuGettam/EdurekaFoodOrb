import { OrderService } from './../../../services/order-service.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userfeed-details',
  templateUrl: './userfeed-details.component.html',
  styleUrls: ['./userfeed-details.component.css'],
})
export class UserfeedDetailsComponent implements OnInit {
  authStatus: any = JSON.parse(sessionStorage.getItem('authStatus') || '{}');
  restAPI: string = 'http://localhost:3000/feed';
  userfeed: any = {};
  OrderCount: number = 0;
  constructor(
    private _httpClient: HttpClient,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _orderService: OrderService
  ) {}

  ngOnInit(): void {
    const { id } = this._activatedRoute.snapshot.params;
    this.getUserFeedById(id).subscribe((userFeed) => {
      this.userfeed = userFeed;
    });

    this.getOrderCount().subscribe((orderData)=>{
this.OrderCount = orderData.length;
    })

  }

  getUserFeedById(id: number): Observable<any> {
    return this._httpClient.get<any>(this.restAPI + '/' + id);
  }

  GotoUserFeed() {
    this._router.navigate(['userfeed']);
  }

  getOrderCount() {
   return this._httpClient
      .get<any>('http://localhost:3000/orders');

  }

  addtoCart(orderinfo: any) {
    console.log(this.OrderCount);
    if(this.OrderCount == 0){
    this._orderService
      .OrderNewFood({
        id: orderinfo.id,
        restaurentname: orderinfo.restaurent_name,
        created_at: new Date(),
        updated_at: null,
        listing_id: orderinfo.id,
        quantity: '1',
        amount: orderinfo.cost,
        imageurl: orderinfo.image_url,
        ordername: orderinfo.name,
      })
      .subscribe((data) => {
        // console.log(data);
      });
    this._router.navigate(['orders']);
  }
  else{
    confirm('Please Complete your added Order');
  }

  }
}
