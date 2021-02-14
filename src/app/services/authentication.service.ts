import { Injectable, OnInit } from '@angular/core';
import { HttpClientService, User } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {
 // findUserObj: User = new User('', '', '');
  constructor(
    private httpClient: HttpClientService
  ) { }


  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {}



  // tslint:disable-next-line: typedef
 /* authenticate(username, password, testObj) {
if (username === 'j' && password === 'pas') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  
  }*/

  // tslint:disable-next-line: typedef
  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  // tslint:disable-next-line: typedef
  adminAccess() {
    const user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  // tslint:disable-next-line: typedef
   logOut() {
    sessionStorage.removeItem('username');
  }
}
