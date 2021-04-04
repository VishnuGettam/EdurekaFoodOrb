import { SearchpipePipe } from './pipes/searchpipe.pipe';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, myComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './common/navmenu/navmenu.component';
import { SettingsComponent } from './settings/settings.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { UserdetailsComponent } from './users/userdetails/userdetails.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';







@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    myComponents,
    SearchpipePipe,
    SettingsComponent,
    UserlistComponent,
    UserdetailsComponent,
    OrderlistComponent,
    OrderdetailsComponent

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
