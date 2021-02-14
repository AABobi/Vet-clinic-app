import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {

  constructor(private router: Router,
              private authService: AuthenticationService) { }

// tslint:disable-next-line: typedef
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
if (this.authService.adminAccess()) {
return true;
}

this.router.navigate(['login']);
return false;

}


}