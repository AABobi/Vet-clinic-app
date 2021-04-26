import { Component, OnInit } from '@angular/core';
import { DateOfTheVisit, Doctors, HttpClientService, Passwords, Users } from '../services/http-client.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-visit-secondpart',
  templateUrl: './add-visit-secondpart.component.html',
  styleUrls: ['./add-visit-secondpart.component.css']
})
export class AddVisitSecondpartComponent implements OnInit {

  constructor(private router: Router, private httpClient: HttpClientService) {}

  ngOnInit(): void {
  }

}
