import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClientService, Passwords, Users } from '../services/http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  test = 'aaa';
  nickname ='';
  username = '';
  userlastname = '';
  passwordd = '';
  invalidLogin = true;
  loginPass: Users = new Users(0,'', '', '','','' ,null);
  findUserObj: Users = new Users(0, '', '', '','', '', null);
  // findUserObj2: User = new User('', '', '', null);
  passwords: Passwords = new Passwords(0,'');


  constructor(private router: Router,
              private loginservice: AuthenticationService,
              private httpClient: HttpClientService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }



// tslint:disable-next-line:typedef
fastLog(){
 // alert('true');
 sessionStorage.setItem('username', 'admin');
 localStorage.setItem('username', 'admin')
 this.router.navigate(['UserAccountComponent']);
}


  
  // tslint:disable-next-line:typedef
  checkLogin() {
  this.loginPass.nickname = this.nickname;
  // alert(this.loginPass.name);
  this.passwords.password = this.passwordd;
  this.loginPass.passwords = this.passwords;
  this.httpClient.userLogIn(this.loginPass).subscribe(data => {
    this.findUserObj = data;
    if (this.findUserObj.name === 'false' || this.findUserObj.name === 'NC'){
    alert(this.findUserObj.name);
    this.invalidLogin = true;
    window.location.reload();
  }else{
   
    sessionStorage.setItem('username', 'admin');
    localStorage.setItem('username', this.nickname)
    this.router.navigate(['UserAccountComponent']);
    this.invalidLogin = false;
   }
  
 // alert(this.findUserObj.name);
});
  }
}
