import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClientService, Users, Passwords } from '../services/http-client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nickname = '';
  username = '';
  userlastname = '';
  email = '';
  passwordd = '';
  passwords: Passwords = new Passwords(0, '');
  regPass: Users = new Users(0, '', '', '', '', '', null);
  constructor(private router: Router,
              private loginservice: AuthenticationService,
              private httpClient: HttpClientService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  createUser(){
    this.regPass.nickname = this.nickname;
    this.regPass.name = this.username;
    this.regPass.lastname = this.userlastname;
    this.regPass.email = this.email;
    this.passwords.password = this.passwordd;
    this.regPass.passwords = this.passwords;
    this.httpClient.createUser(this.regPass).subscribe(data =>{
    if (data.nickname === 'nickname'){
     this.router.navigate(['RegisterComponent']);
     window.location.reload();
     alert('uncorrent nickname');
     /*this.nickname = '';
     this.username = '';
     this.userlastname = '';
     this.passwordd = '';*/
    }else if(data.nickname === 'email'){
      this.router.navigate(['RegisterComponent']);
      window.location.reload();
      alert('An account with this email exists ');
    }else{
      alert(data.nickname);
      this.router.navigate(['LoginComponent']);
      //sessionStorage.setItem('username', data.name);
    }
    });
  }
}
