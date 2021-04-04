import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  authStatus: any = JSON.parse(sessionStorage.getItem('authStatus') || '{}');
  restAPI: string = 'http://localhost:3000/orders';
  order: any = {};
  constructor(private _httpClient:HttpClient,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const { id } = this._activatedRoute.snapshot.params;
    this.getOrderById(id).subscribe((order) => {
      this.order = order;
    });
  }

  getOrderById(id: number): Observable<any> {
    return this._httpClient.get<any>(this.restAPI + '/' + id);
  }
}
