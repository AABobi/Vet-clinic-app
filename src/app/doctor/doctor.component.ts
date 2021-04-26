import { Component, OnInit } from '@angular/core';
import { DateOfTheVisit, Doctors, HttpClientService, Passwords, Users } from '../services/http-client.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  hoursObj: DateOfTheVisit[] = [];
  hours: string[] = [];
  users: Users[] = [];
  constructor(private router: Router, private httpClient: HttpClientService) { }

  ngOnInit(): void {
    this.httpClient.getTodaysAppointment(sessionStorage.getItem('doctorId')).subscribe(doctorAppointment => {
      this.hoursObj = doctorAppointment;
        // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < doctorAppointment.length; i++){
       this.hours[i] = doctorAppointment[i].dateof;
     }
      this.httpClient.getTodaysAppointmentUsers(sessionStorage.getItem('doctorId')).subscribe(data => {
      this.users = data;
      for (let i = 0; i < this.users.length; i++){
        this.users[i].permissions = this.hours[i];
     }
     });
   });
 // tslint:disable-next-line:align

   }

   // tslint:disable-next-line:typedef
   showInformation(user: Users){
    this.httpClient.showInformation(user).subscribe();
}

    // Method sends information about users what admin looking for.
  // Server sends back specified information (found or not found)
  // tslint:disable-next-line:typedef
   // tslint:disable-next-line:typedef
   deleteAnAppointment(user: Users){
  // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.hoursObj.length; i++){
     if(user.permissions === this.hoursObj[i].dateof){
        this.httpClient.deleteAnAppointment(this.hoursObj[i]).subscribe(data => {
          window.location.reload();
        });
       }
    }
   }
  }
