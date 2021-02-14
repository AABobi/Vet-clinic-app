import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UserLogInComponent } from './user-log-in/user-log-in.component'
import { AppComponent } from './app.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AddVisitComponent } from './add-visit/add-visit.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';




@NgModule({
  declarations: [
    AppComponent,
    UserLogInComponent,
    UserAccountComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    AddVisitComponent,
    RegisterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
