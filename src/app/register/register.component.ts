import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClientService, User, Passwords } from '../services/http-client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nickname = '';
  username = '';
  userlastname = '';
  passwordd = '';
  passwords: Passwords = new Passwords('');
  regPass: User = new User('','', '', '', null, null);
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
    this.passwords.password = this.passwordd;
    this.regPass.passwords = this.passwords;
    this.httpClient.createUser(this.regPass).subscribe(data =>{
    if(data.nickname === 'exist'){
     this.router.navigate(['RegisterComponent']);
     alert('uncorrent nickname');
     this.nickname = '';
     this.username = '';
     this.userlastname = '';
     this.passwordd = '';
    }else{
      alert(data.nickname);
      this.router.navigate(['UserAccountComponent']);
      sessionStorage.setItem('username', data.name);
    }
    });
  }
}
