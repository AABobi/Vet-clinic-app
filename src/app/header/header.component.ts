import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClientService, Passwords, User } from '../services/http-client.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
userPermissions: User = new User('', '', '', '', '', null, null);

  constructor(public loginService: AuthenticationService,
              public httpClient: HttpClientService ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
this.httpClient.findUser(sessionStorage.getItem('username')).subscribe(data => {
 this.userPermissions = data;
});
  }

  test(){
    if(sessionStorage.getItem('username') === 'admin'){
     return true;
    }else{
    return false;
    }
  }
}
