import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit,DoCheck {
  authStatus: string = sessionStorage.getItem('authStatus') || '';
  constructor(private _router:Router) { }
  ngDoCheck(): void {
    this.authStatus= sessionStorage.getItem('authStatus') || '';
  }

  ngOnInit(): void {
  }

  logout() {
    sessionStorage.removeItem('authStatus');
    //this._router.navigate(['/']);
    // //var currentURL = this._router.url;
    // this._router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
    //   this._router.navigate(['/']);
    // })

    window.location.href = window.location.href;
  }
}
