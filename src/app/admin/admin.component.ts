import { Component, OnInit } from '@angular/core';
import { DateOfTheVisit, HttpClientService, Passwords, User } from '../services/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
nickname = '';
name;
lastName;
user: User = new User(0, '', '', '','', '', null);
dateOfTheVisit: DateOfTheVisit = new DateOfTheVisit(0, '', null, null);
adminLookingForUser: User = new User(0, '', '', '', '', '', null);
usersArray: User[] = [];
  constructor(private router: Router, public httpClient: HttpClientService) {
   }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  findUserForAdmin(){
    this.adminLookingForUser.name = this.name;
    this.adminLookingForUser.lastname = this.lastName;
    this.httpClient.findUserForAdmin(this.adminLookingForUser).subscribe(data =>{
    this.usersArray = data;
    });
  }
  // tslint:disable-next-line:typedef
  findAllUsersForAdmin(){
    this.httpClient.findAllUsersForAdmin().subscribe(data =>{
      this.usersArray = data;
    });
  }

  // tslint:disable-next-line:typedef
  goToTerms(user: User){
   if(this.nickname === ''){
    this.router.navigate(['AddVisitComponent']);
  }else{
    sessionStorage.setItem('username', user.nickname );
    this.router.navigate(['AddVisitComponent']);
   }
  }
 // tslint:disable-next-line:typedef
  goToTerms2(user: User){
    if(this.nickname === ''){
     sessionStorage.setItem('username', 'unregister');
     this.router.navigate(['AddVisitComponent']);
   }else{
     sessionStorage.setItem('username', user.nickname );
     this.router.navigate(['AddVisitComponent']);
    }
   }

  // tslint:disable-next-line:typedef
  addVisit(terms: string) {
    this.user.nickname = sessionStorage.getItem('username');
    window.location.reload();
    this.dateOfTheVisit.dateof = terms;
    this.httpClient.addVisit(this.user).subscribe();
}
}
