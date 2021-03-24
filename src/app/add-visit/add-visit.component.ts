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
  terms: string;
  doctorForAdmin: Doctors;
  doctorsObjNgOnInit: Doctors[] = [];
  doctorNameAndId;
  doctors: Doctors[] = [];
  docIdArr: string[] = [];
  pageApperarance = true;
 
  constructor(private router: Router, private httpClient: HttpClientService) {}
  // tslint:disable-next-line:ban-types
  availableTermsFromServer: string[] = [];
  
  ngOnInit(): void {
    this.httpClient.getDoctors().subscribe(data => {
      this.doctors = data;
      });

    // alert(sessionStorage.getItem('username'));
    if (sessionStorage.getItem('username') === 'unregister' && this.pageApperarance === true){
      // alert
      this.pageApperarance = false;
    }
    this.httpClient.getVisit().subscribe(
    data => {
    this.availableTermsFromServer = data;
  });
 
    this.httpClient.getDoctors().subscribe(data => {
    this.doctorsObjNgOnInit = data;
    });
}
// Changes vision
// tslint:disable-next-line:typedef
availableTerms(){
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
changeTheDisplayTerms(){
  let arrayNum = this.availableTermsFromServer.length - 1;
  this.dateOfTheVisit.dateof = this.availableTermsFromServer[arrayNum];
  alert(this.dateOfTheVisit.dateof);
  this.httpClient.changeDate(this.dateOfTheVisit).subscribe(
    data => {
    this.availableTermsFromServer = data;
  
  });
}

// tslint:disable-next-line:typedef
goToAvaiableTerms(){
this.pageApperarance = true;
}
//This method adds date to DB
// tslint:disable-next-line:typedef
addVisit(terms: string) {
      // tslint:disable-next-line:radix
      const doctorId = parseInt(this.getDoctorId().join(''));
      let i = 0;
      for (i; i < this.doctors.length; i++){
        if (this.doctors[i].id === doctorId){
          //this.doctorForAdmin = this.doctors[i];
          this.dateOfTheVisitUnReg.doctors = this.doctors[i];
        }
      }
     // alert(this.dateOfTheVisitUnReg);
      //this.dateOfTheVisitUnReg.doctors = this.doctorForAdmin;
      this.dateOfTheVisitUnReg.dateof = terms;
      this.dateOfTheVisitUnReg.users = this.user;
      this.httpClient.addTermsWithoutAccount(this.dateOfTheVisitUnReg).subscribe();
      window.location.reload();
     // this.pageApperarance = true;

}
}
