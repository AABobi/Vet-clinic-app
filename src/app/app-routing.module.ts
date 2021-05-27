import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserLogInComponent } from './user-log-in/user-log-in.component';
import { HeaderComponent } from './header/header.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import {AddVisitSecondpartComponent} from './add-visit-secondpart/add-visit-secondpart.component';
import {AddVisitComponent} from './add-visit/add-visit.component';
import {RegisterComponent} from './register/register.component';
import {AdminComponent} from './admin/admin.component';
import {AdminGuardService} from './services/admin-guard.service';
import {DoctorComponent} from './doctor/doctor.component';
import {SettingsComponent} from './settings/settings.component'
import {ConfirmationComponent} from './confirmation/confirmation.component';
/*{path: 'UserAccountComponent', component: UserAccountComponent,canActivate:[AuthGaurdService] },
{path: '', component: UserLogInComponent,canActivate:[AuthGaurdService]},
{ path: 'login', component: LoginComponent},
{ path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]  },
];*/
const routes: Routes = [
/*  {path: 'AddVisitComponent', component: AddVisitComponent},
{path: 'UserAccountComponent', component: UserAccountComponent},
{path: '', component: UserLogInComponent},
{ path: 'login', component: LoginComponent},
{ path: 'logout', component: LogoutComponent },AdminComponent
];*/

{path: 'AddVisitComponent', component: AddVisitComponent,canActivate:[AuthGaurdService]},
{path: 'DoctorComponent', component: DoctorComponent,canActivate:[AuthGaurdService]},
{path: 'AddVisitSecondpartComponent', component: AddVisitSecondpartComponent,canActivate:[AuthGaurdService]},
{path: 'UserAccountComponent', component: UserAccountComponent,canActivate:[AuthGaurdService] },
{path: 'RegisterComponent', component: RegisterComponent},
{path: 'UserLogInComponent/:id', component: UserLogInComponent},
{path: 'SettingsComponent', component: SettingsComponent, canActivate:[AuthGaurdService] },
{path: 'ConfirmationComponent', component: ConfirmationComponent, canActivate:[AuthGaurdService] },
{ path: 'LoginComponent', component: LoginComponent},
{ path: '', component: LoginComponent},
{ path: 'LogoutComponent', component: LogoutComponent,canActivate:[AuthGaurdService]  },
{path: 'AdminComponent', component: AdminComponent,canActivate:[AdminGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }