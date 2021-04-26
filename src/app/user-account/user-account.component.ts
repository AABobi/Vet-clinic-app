import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Doctors, HttpClientService, Users } from '../services/http-client.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  
 // tslint:disable-next-line:typedef
  ngOnInit() {
    /*for (let i = 0; i < localStorage.length; i++){
      let key = sessionStorage.key(i);
      let value = sessionStorage.getItem(key);
      let key1 = localStorage.key(i);
      let value1 = localStorage.getItem(key1);
      console.log(key, value);
      console.log(key, value1);
    }*/
}}
