import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpClientService, Users } from '../services/http-client.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
usersUAC: Users[];
findUserObj: Users = new Users(0,'', '', '','','', null);
id = '1';
  constructor(private httpClientService: HttpClientService
    ) { }
   // tslint:disable-next-line:typedef
  /*ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
      responseEmployees => {
        this.usersUAC = responseEmployees;
        alert('d');
      }
    );
  }*/

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.httpClientService.getEmployees(this.id).subscribe(
      responseEmployees => {
        this.findUserObj = responseEmployees;
        alert('d');
      }
    );
  }


 /*
  constructor(private httpClientService: HttpClientService
    ) { }
   // tslint:disable-next-line:typedef
  ngOnInit() {
    alert(localStorage.getItem('userId'));
    this.httpClientService.userAccount(localStorage.getItem('userId')).subscribe(
      responseEmployees => {

        this.findUserObj = responseEmployees;
        alert(this.findUserObj.lastname);
      }
    );
  }*/

  test(): void{
    alert(sessionStorage.getItem('username'));
    alert(localStorage.getItem('userId'));
  }

  deleteUser(user: Users): void {
    this.httpClientService.deleteUser(user)
      .subscribe( data => {
        this.usersUAC = this.usersUAC.filter(u => u !== user);
      });
}

}
