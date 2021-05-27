import { Injectable, OnInit } from '@angular/core';
import { HttpClientService, Users } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {
  constructor(
    private httpClient: HttpClientService
  ) { }


  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  isUserLoggedIn() {
    const user = sessionStorage.getItem('function');
    console.log(!(user === null));
    return !(user === null);
  }

  // tslint:disable-next-line: typedef
  adminAccess() {
    const user = sessionStorage.getItem('function');
    console.log(user);
    return (user === 'admin');
  }
// tslint:disable-next-line: typedef
  doctorAccess() {
    const user = sessionStorage.getItem('function');
    console.log(!(user === 'doctor'));
    return (user === 'doctor');
  }

  // tslint:disable-next-line: typedef
   logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('function');
  }
}
