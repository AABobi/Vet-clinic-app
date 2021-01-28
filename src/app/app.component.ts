import { Component,OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'vet-clinic-app';
}
