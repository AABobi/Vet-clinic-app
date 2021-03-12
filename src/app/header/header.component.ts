import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClientService, Passwords, Users } from '../services/http-client.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
userPermissions: Users = new Users(0, '', '', '', '', '', null);

  constructor(public loginService: AuthenticationService,
              public httpClient: HttpClientService ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
this.httpClient.findUser(sessionStorage.getItem('username')).subscribe(data => {
 this.userPermissions = data;
});
  }
  //When server return String "admin" then this method return true and activates admin panel else - normal user view
  // tslint:disable-next-line:typedef
  test(){
    if(localStorage.getItem('username') === 'admin'){
      return true;
     }else{ 
    return false;
    }
  }
}
