import { OrderService  } from './../../../services/order-service.service';
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
  constructor(
    private _httpClient: HttpClient,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _orderService :OrderService
  ) {}

  ngOnInit(): void {
    const { id } = this._activatedRoute.snapshot.params;
    this.getUserFeedById(id).subscribe((userFeed) => {
      this.userfeed = userFeed;
    });
  }

  getUserFeedById(id: number): Observable<any> {
    return this._httpClient.get<any>(this.restAPI + '/' + id);
  }

  GotoUserFeed() {
    this._router.navigate(['userfeed']);
  }
  addtoCart() {

    this._orderService.OrderNewFood(
      {
        "id": 3,
        "created_at": new Date(),
        "updated_at": null,
        "listing_id": "2",
        "quantity": "1",
        "amount": 250
    }).subscribe((data)=>{
        console.log(data);
    });
   this._router.navigate(['orders']);
  }
}
