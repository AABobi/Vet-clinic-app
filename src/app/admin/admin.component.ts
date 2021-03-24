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
user: Users = new Users(null, '', '', '', '', '', null);

dateOfTheVisit: DateOfTheVisit = new DateOfTheVisit(0, '', null, null);
vision = null;
adminLookingForUser: Users = new Users(null, '', '', '', '', '', null);

usersArray: Users[] = [];

dateOfTheVisitArray: DateOfTheVisit[] = [];
  constructor(private router: Router, public httpClient: HttpClientService) {
   }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  test(vision: string){
    if(vision === 'findAll'){
    return true;
    }else{
      return false;
    }
  }
  // Method sends information about users what admin looking for.
  // Server sends back specified information (found or not found)
  // tslint:disable-next-line:typedef
   // tslint:disable-next-line:typedef
  deleteAnAppointment(date: DateOfTheVisit){
   this.httpClient.deleteAnAppointment(date).subscribe(data => {
    this.dateOfTheVisitArray = data;
  });
   
 }

 // tslint:disable-next-line:typedef
 changeDate(date: DateOfTheVisit){
  this.httpClient.deleteAnAppointment(date).subscribe(data => {
    this.dateOfTheVisitArray = data;
  });
  this.router.navigate(['AddVisitComponent']);
 }
 
  // tslint:disable-next-line:typedef
  findUserForAdmin(){
    this.vision = true;
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
    this.vision = true;
    this.httpClient.findAllUsersForAdmin().subscribe(data =>{
      this.usersArray = data;
    });
  }

  // Switch to free terms
  // tslint:disable-next-line:typedef
  goToTerms(user: Users){
    this.user.nickname = 'Just want to see available terms'
    sessionStorage.setItem('username', user.nickname );
    this.router.navigate(['AddVisitComponent']);
  }
    // Switch to free terms
 // tslint:disable-next-line:typedef
  goToTermsUnReg(user: Users){
    this.vision = true;
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
