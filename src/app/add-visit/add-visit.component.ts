import { Component, OnInit } from '@angular/core';
import { DateOfTheVisit, Doctors, HttpClientService, Passwords, Users } from '../services/http-client.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
  styleUrls: ['./add-visit.component.css']
})
export class AddVisitComponent implements OnInit {
  user: Users = new Users(69, '', '', '', '', '', null);
  dateOfTheVisit: DateOfTheVisit = new DateOfTheVisit(null, '', null, null);
  dateOfTheVisitUnReg: DateOfTheVisit = new DateOfTheVisit(null, '', null, null);
  doctorForAdmin: Doctors;
  doctorsObjNgOnInit: Doctors[] = [];
  doctorNameAndId;
  doctors: Doctors[] = [];
  docIdArr: string[] = [];
  pageApperarance = true;
  displayDateIterator = 1;
  test = 1;
  constructor(private router: Router, private httpClient: HttpClientService) {}
  // tslint:disable-next-line:ban-types
  availableHoursFromServer: string[] = [];

  ngOnInit(): void {


    this.httpClient.getDoctors().subscribe(data => {
      this.doctors = data;
      });
    // alert(sessionStorage.getItem('username'));
    // tslint:disable-next-line:max-line-length
    if ((sessionStorage.getItem('username') === 'unregister' && sessionStorage.getItem('makeAnAppointmentName') === '') && this.pageApperarance === true){
      this.pageApperarance = false;
    }
  
    /*this.httpClient.getAllVisit().subscribe(
    data => {
   
  });*/

    this.httpClient.getDoctors().subscribe(data => {
    this.doctorsObjNgOnInit = data;
    });
}
// Changes vision
// tslint:disable-next-line:typedef
availableHours(){
  this.pageApperarance = true;
}
// Changes vision
// tslint:disable-next-line:typedef
back(){
  this.pageApperarance = false;
}
// This metoda gets doctors id
// tslint:disable-next-line:typedef
  getDoctorId(){
  this.doctorNameAndId = document.getElementById('ddlViewBy');
  const doctorNameAndIdStr = this.doctorNameAndId.options[this.doctorNameAndId.selectedIndex].text;
  // tslint:disable-next-line:prefer-for-of
  let docIdArrLoopVariable = 0;
  for (let i = 0; i < doctorNameAndIdStr.length; i++){
    if (doctorNameAndIdStr.charAt(i) >= '0' && doctorNameAndIdStr.charAt(i) <= '9') {
      this.docIdArr[docIdArrLoopVariable] = doctorNameAndIdStr.charAt(i);
      docIdArrLoopVariable++;
    }
  }
  return this.docIdArr;
}

// tslint:disable-next-line:typedef
hoursForSelectedDoctor(){
      const doctorId = parseInt(this.getDoctorId().join(''));
      let doctor: Doctors;
      let i = 0;
      for (i; i < this.doctors.length; i++){
        if (this.doctors[i].id === doctorId){
          // this.doctorForAdmin = this.doctors[i];
          doctor = this.doctors[i];
        }
      }
    
      this.httpClient.findHoursForSelectedDoctor(doctor).subscribe(
        data => {
          this.availableHoursFromServer = data;
        });
      this.displayDateIterator = 2;
      }

// tslint:disable-next-line:typedef
changeTheDisplayHours(){
  const arrayNum = this.availableHoursFromServer.length - 1;
  this.dateOfTheVisit.dateof = this.availableHoursFromServer[arrayNum];
 // alert(this.dateOfTheVisit.dateof);
  this.httpClient.changeDate(this.dateOfTheVisit).subscribe(
    data => {
    this.availableHoursFromServer = data;

  });
}

// tslint:disable-next-line:typedef
goToAvaiableHours(){
this.pageApperarance = true;
}
// This method adds date to DB
// tslint:disable-next-line:typedef
addVisit(Hours: string) {
      // tslint:disable-next-line:radix
      const doctorId = parseInt(this.getDoctorId().join(''));
      let i = 0;
      for (i; i < this.doctors.length; i++){
        if (this.doctors[i].id === doctorId){
          this.dateOfTheVisitUnReg.doctors = this.doctors[i];
        }
      }
      this.dateOfTheVisitUnReg.users = this.user;
      this.dateOfTheVisitUnReg.dateof = Hours;
      if (sessionStorage.getItem('username') === 'unregister' && sessionStorage.getItem('makeAnAppointmentName') === ''){

        this.httpClient.addHoursWithoutAccount(this.dateOfTheVisitUnReg).subscribe();
       
        window.location.reload();
      }else{
        this.dateOfTheVisitUnReg.users.name = sessionStorage.getItem('makeAnAppointmentName');
        this.dateOfTheVisitUnReg.users.lastname = sessionStorage.getItem('makeAnAppointmentLastName');
        this.dateOfTheVisitUnReg.users.email = sessionStorage.getItem('makeAnAppointmentEmail');
        for (let i = 0; i < sessionStorage.length; i++){
          let key = sessionStorage.key(i);
          let value = sessionStorage.getItem(key);
          console.log(key, value);
        }
        this.httpClient.addHours(this.dateOfTheVisitUnReg).subscribe();
        window.location.reload();
      }
     
  

}
}
