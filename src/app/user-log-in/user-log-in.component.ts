import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClientService, User} from '../services/http-client.service';




@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.component.html',
  styleUrls: ['./user-log-in.component.css']
})
export class UserLogInComponent implements OnInit {
 private routeSub: Subscription;
constructor(private router: Router, private route: ActivatedRoute, private httpClient: HttpClientService) { }

userId: number;

  // tslint:disable-next-line:typedef
  ngOnInit(): void {
  //  const id = this.route.snapshot.paramMap.get('id');
    this.userId = +this.route.snapshot.paramMap.get('id');
}
  // tslint:disable-next-line:typedef
  confirmUser(){
   this.httpClient.confirmUser(this.userId).subscribe();
   alert("You confrim account successfully")  
   this.router.navigate(['LoginComponent']);
  }
}


