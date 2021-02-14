import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClientService, Passwords, User } from '../services/http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nickname ='';
  username = '';
  userlastname = '';
  passwordd = '';
  invalidLogin = true;
  loginPass: User = new User('','', '', '','', null, null);
  findUserObj: User = new User('', '', '', '','', null, null);
  // findUserObj2: User = new User('', '', '', null);
  passwords: Passwords = new Passwords('');


  constructor(private router: Router,
              private loginservice: AuthenticationService,
              private httpClient: HttpClientService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }



// tslint:disable-next-line:typedef
fastLog(){
 // alert('true');
  sessionStorage.setItem('username', 'test');
  localStorage.setItem('userId','1');
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
   if(data.passwords.confirmed === 2){
    sessionStorage.setItem('username', 'admin');
    alert(sessionStorage.getItem('username'));
    this.router.navigate(['UserAccountComponent']);
    this.invalidLogin = false;
   }else{
    sessionStorage.setItem('username', this.nickname);
    alert(sessionStorage.getItem('username'));
    this.router.navigate(['UserAccountComponent']);
    this.invalidLogin = false;
   }
  
 // alert(this.findUserObj.name);
 }
});
  }
}
