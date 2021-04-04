import { Router } from '@angular/router';
import { UsetItemServiceService } from './../services/uset-item-service.service';
import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-userfeed',
  templateUrl: './userfeed.component.html',
  styleUrls: ['./userfeed.component.css'],
})
export class UserfeedComponent implements OnInit, DoCheck {
  authStatus: any = JSON.parse(sessionStorage.getItem('authStatus') || '{}');

  useritems: any = [];
  query: any = '';
  constructor(
    private _userItemService: UsetItemServiceService,
    private _router: Router
  ) {}
  ngDoCheck(): void {
    this.authStatus = JSON.parse(sessionStorage.getItem('authStatus') || '{}');
  }

  ngOnInit(): void {
    this.authStatus = JSON.parse(sessionStorage.getItem('authStatus') || '{}');
    this._userItemService.getUserItems().subscribe((userItems) => {
      this.useritems = this.splitArr(userItems, 3);
    });
  }

  splitArr(arr: any[], size: number) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  }

  RestaurentDetails(id: number) {
    this._router.navigate(['userfeed', id]);
  }
}
