import { Component, OnInit } from '@angular/core';
import { DateOfTheVisit, HttpClientService, Passwords, User } from '../services/http-client.service';
@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
  styleUrls: ['./add-visit.component.css']
})
export class AddVisitComponent implements OnInit {
  user: User = new User(0, '', '', '', '', '', null);
  comment: string;
  dateOfTheVisit: DateOfTheVisit = new DateOfTheVisit(0, '', null, null);
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
     this.user.nickname = sessionStorage.getItem('username');
     if (this.user.nickname === 'unregister'){
     this.pageApperarance = false;
     this.terms = terms;
     }else{
     window.location.reload();
     this.dateOfTheVisit.dateof = terms;
     this.dateOfTheVisit.id = this.user.id;
     this.httpClient.addVisit(this.dateOfTheVisit).subscribe();
     }
}
}
