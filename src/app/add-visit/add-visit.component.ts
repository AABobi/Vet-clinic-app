import { Component, OnInit } from '@angular/core';
import { DateOfTheVisit, HttpClientService, Passwords, User } from '../services/http-client.service';
@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
  styleUrls: ['./add-visit.component.css']
})
export class AddVisitComponent implements OnInit {
  user: User = new User('', '', '', '','', null, null);
  dateOfTheVisit: DateOfTheVisit = new DateOfTheVisit('');
  test2: User = new User('', '', '', '','', null, null);
  // tslint:disable-next-line:ban-types
  date: String = '';
  // tslint:disable-next-line:ban-types
  dateArray: String[] = [];
  constructor(private httpClient: HttpClientService) {}
  // tslint:disable-next-line:ban-types
  availableTermsFromServer: String[] = [];
  ngOnInit(): void {
    //alert(sessionStorage.getItem('username'));
    this.httpClient.getVisit().subscribe(
    data => {
    this.availableTermsFromServer = data;
  });}



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
     window.location.reload();
     this.dateOfTheVisit.dateof = terms;
     this.user.dateOfTheVisit = this.dateOfTheVisit;
     this.httpClient.addVisit(this.user).subscribe();

    }
}
