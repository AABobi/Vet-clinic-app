import { Component, OnInit } from '@angular/core';
import { DateOfTheVisit, HttpClientService, Passwords, Users } from '../services/http-client.service';
@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
  styleUrls: ['./add-visit.component.css']
})
export class AddVisitComponent implements OnInit {
  user: Users = new Users(69, '', '', '', '', '', null);
  comment: string;
  dateOfTheVisit: DateOfTheVisit = new DateOfTheVisit(69, '', this.user, null);
  terms: string;
  pageApperarance = true;
  constructor(private httpClient: HttpClientService) {}
  // tslint:disable-next-line:ban-types
  availableTermsFromServer: String[] = [];
  ngOnInit(): void {
    // alert(sessionStorage.getItem('username'));
    this.httpClient.getVisit().subscribe(
    data => {
    this.availableTermsFromServer = data;
  });
}

test(){
  if(localStorage.getItem('username') === 'admin'){
    return true;
   }else{ 
  return false;
  }
}

// tslint:disable-next-line:typedef
addVisiWithOut(){
this.user.nickname = this.terms;
alert(this.terms);
this.httpClient.addTermsWithoutAccount(this.user).subscribe();
}

    // tslint:disable-next-line:typedef
    /*createTask(name: string, deadline: string) {
      alert('dupa');
      this.test.name = name;
      this.test.lastname = deadline;
      this.httpClient.testDate(this.test).subscribe(data => {
      this.test2 = data;
      alert(this.test2.lastname);
    });
    }*/
    // tslint:disable-next-line:typedef
    addVisit(terms: string) {
     this.user.nickname = localStorage.getItem('username');
     //alert(this.user.nickname);
     if (this.user.nickname === 'unregister'){
     this.pageApperarance = false;
     this.terms = terms;
     }else{
     // alert(localStorage.getItem('username'));
     window.location.reload();
     // tslint:disable-next-line:no-unused-expression
     this.dateOfTheVisit.dateof = terms;
     // this.dateOfTheVisit.id = this.user.id;
     this.dateOfTheVisit.users = this.user;
    
     this.httpClient.addVisit(this.dateOfTheVisit).subscribe();
     } 
}
}
