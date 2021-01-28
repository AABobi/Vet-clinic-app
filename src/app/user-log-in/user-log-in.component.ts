import { Component, OnInit } from '@angular/core';
import { HttpClientService, User} from '../services/http-client.service';

@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.component.html',
  styleUrls: ['./user-log-in.component.css']
})
export class UserLogInComponent implements OnInit {
  /*users: User[] = [
    {
      logInUser();
    }
  ];*/
constructor(
  private httpClientService: HttpClientService
) { }
  namee: string;
  pathFalse = "/";
  pathTrue = "/users";
  path: string;
user: User = new User('','', '', '',null, null);
loginPass: User = new User('','', '', '',null, null);
user2: User = new User('','', '', '',null, null);
findUserObj: User = new User('','','','',null, null);
test: User = new User('','','','',null, null);
test2: User = new User('1','a','b','',null, null);
//ngOnInit(){}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    //this.httpClientService.userLogIn().subscribe(
  //    responseEmployees => {this.user2 = responseEmployees; }
  //  );
  }


  


  /*gett(): void{
    this.httpClientService.userLogIn().subscribe(
      responseUser => {
        this.users = responseUser;
        alert('Test');
      }
    );*/
  }


