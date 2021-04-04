import { UserdetailsComponent } from './users/userdetails/userdetails.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { FriendsComponent } from './friends/friends.component';
import { SettingsComponent } from './settings/settings.component';
import { UserfeedComponent } from './userfeed/userfeed.component';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';
import { OrderlistComponent } from './orders/orderlist/orderlist.component';
import { OrderdetailsComponent } from './orders/orderdetails/orderdetails.component';


const routes: Routes = [
  { path: '',redirectTo: '/userfeed',pathMatch:'full'},
  {path:'auth/forgotpassword',component:ForgotpasswordComponent},
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  {path:'settings',component:SettingsComponent},
  {path:'friends',component:FriendsComponent},
  {path:'userfeed',component:UserfeedComponent},
  {path:'users',component:UserlistComponent},
  {path:'users/:id',component:UserdetailsComponent},
  {path:'orders',component:OrderlistComponent},
  {path:'orders/:id',component:OrderdetailsComponent},
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const myComponents = [
  LoginComponent,
  RegisterComponent,
  PagenotfoundComponent,
  ForgotpasswordComponent,
  UserfeedComponent,
  FriendsComponent,
  UserlistComponent,
  UserdetailsComponent,
  OrderlistComponent,
  OrderdetailsComponent
];
