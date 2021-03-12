import { Component, OnInit } from '@angular/core';
import { DateOfTheVisit, HttpClientService, Passwords, Users } from '../services/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
nickname = '';
// name;
// lastName;
user: Users = new Users(0, '', '', '', '', '', null);

dateOfTheVisit: DateOfTheVisit = new DateOfTheVisit(0, '', null, null);

adminLookingForUser: Users = new Users(0, '', '', '', '', '', null);

usersArray: Users[] = [];

dateOfTheVisitArray: DateOfTheVisit[] = [];
  constructor(private router: Router, public httpClient: HttpClientService) {
   }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  test(){
    return false;
  }
  // Method sends information about users what admin looking for.
  // Server sends back specified information (found or not found)
  // tslint:disable-next-line:typedef
   // tslint:disable-next-line:typedef
  deleteAnAppointment(date: DateOfTheVisit){
   this.httpClient.deleteAnAppointment(date).subscribe();
  }
  
  findUserForAdmin(){
    // this.adminLookingForUser.name = this.name;
    // this.adminLookingForUser.lastname = this.lastName;
    this.httpClient.findUserForAdmin(this.adminLookingForUser).subscribe(data =>{
    this.usersArray = data;
    });
  }
  // This method gets all appointments from DB.
  // Displays dates in a table and admin can delete any date from DB.
  // tslint:disable-next-line:typedef
  appointments(){
   this.httpClient.appointments().subscribe(data => {
     this.dateOfTheVisitArray = data;
   });
  }

  // Gets all users from database.
  // tslint:disable-next-line:typedef
  findAllUsersForAdmin(){
    this.httpClient.findAllUsersForAdmin().subscribe(data =>{
      this.usersArray = data;
    });
  }

  // Switch to free terms
  // tslint:disable-next-line:typedef
  goToTerms(user: Users){
   if(this.nickname === ''){
    this.router.navigate(['AddVisitComponent']);
  }else{
    sessionStorage.setItem('username', user.nickname );
    this.router.navigate(['AddVisitComponent']);
   }
  }
    // Switch to free terms
 // tslint:disable-next-line:typedef
  goToTerms2(user: Users){
    if(this.nickname === ''){
     sessionStorage.setItem('username', 'unregister');
     this.router.navigate(['AddVisitComponent']);
   }else{
     sessionStorage.setItem('username', user.nickname );
     this.router.navigate(['AddVisitComponent']);
    }
   }

  // Adds term do the DB(sends to server)
  // tslint:disable-next-line:typedef
  addVisit(terms: string) {
    this.user.nickname = sessionStorage.getItem('username');
    window.location.reload();
    this.dateOfTheVisit.dateof = terms;
    this.httpClient.addVisit(this.user).subscribe();
}
}
