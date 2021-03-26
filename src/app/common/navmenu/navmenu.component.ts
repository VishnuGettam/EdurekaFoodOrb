import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  authStatus: string = localStorage.getItem('authStatus') || '';
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('authStatus');
    this._router.navigate(['/feed']);
  }
}
