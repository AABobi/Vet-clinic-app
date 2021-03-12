import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UrlSerializer } from '@angular/router';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';
/* tslint:disable */
export class Users{
   public id: number;
   public nickname: string;
   public name: string;
   public lastname: string;
   public email: string;
   public permissions: string;
   public passwords: Passwords;
   
 constructor(usersId: number, nickname: string, name: string, lastname: string, email: string, permissions: string, passwords: Passwords ){
    this.id = usersId;
    this.nickname = nickname;
    this.name = name;
    this.email = email;
    this.lastname = lastname;
    this.permissions = permissions;
    this.passwords = passwords;
   
  }
}
export class Doctors{
  public id: number;
  public nickname: string;
  public name: string;
  public lastname: string;
  public email: string;
  public permissions: string;
  public passwords: Passwords;

  
constructor(usersId: number,nickname: string,name: string,lastname: string,email: string,permissions: string,password: Passwords ){
   this.id = usersId;
   this.nickname = nickname;
   this.name = name;
   this.email = email;
   this.lastname = lastname;
   this.permissions = permissions;
   this.passwords = password;
  
 }
}
export class Admins{
  public id: number;
  public nickname: string;
  public name: string;
  public lastname: string;
  public email: string;
  public permissions: string;
  public passwords: Passwords;

  
constructor(usersId: number,nickname: string,name: string,lastname: string,email: string,permissions: string, password: Passwords ){
   this.id = usersId;
   this.nickname = nickname
   this.name = name;
   this.email = email;
   this.lastname = lastname;
   this.permissions = permissions;
   this.passwords = password;
  
 }
}



export class History{
public id: number;
public name: string;
public description: string;
public users: Users;
public doctors: Doctors;
constructor(id: number,name: string, description: string, users: Users, doctors: Doctors ){
  this.id = id;
  this.name = name;
  this.description = description;
  this.users = users;
  this.doctors = doctors;
}

}


export class Passwords{
  public id: number;
  public password: string;
  
  constructor(id: number, password: string){
    this.id = id;
    this.password = password;
 }
}

export class DateOfTheVisit{
  public id: number;
  public dateof: string;
  public users: Users;
  public doctors: Doctors;

  constructor(id: number, dateof: string, users: Users, doctors: Doctors){
  this.id = id;
  this.dateof = dateof;
  this.users = users;
  this.doctors = doctors;
}
}


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  tmp = 0;
  constructor(
    private httpClient: HttpClient
  ) { }

 public deleteAnAppointment(date){
   return this.httpClient.post<null>('http://localhost:8080//deleteAnAppointment',date);
 }

  public appointments(){
    return this.httpClient.get<DateOfTheVisit[]>('http://localhost:8080//appointments');
  }

  getEmployees(id) {
    console.log('test call');
    return this.httpClient.get<Users>('http://localhost:8080//findAllMain1'+'/'+id);
  }

  public getVisit(){
    return this.httpClient.get<String[]>('http://localhost:8080//getTerms');
  }


  public addVisit(de){
    return this.httpClient.put<null>('http://localhost:8080//addTerms',de);
  }

  public addTermsWithoutAccount(users){
    return this.httpClient.put<null>('http://localhost:8080//addTermsWithoutAccount',users);
  }

 public createUser(users) {
    return this.httpClient.post<Users>('http://localhost:8080//create',users);
  }

  public testDate(y): Observable<String[]>{
    return this.httpClient.post<String[]>('http://localhost:8080//test',y);
  } 
  public findUser(usersNickName): Observable<Users>{
    return this.httpClient.get<Users>('http://localhost:8080//findUser'+'/'+ usersNickName);
  } 

  public findUserForAdmin(users): Observable<Users[]>{
    return this.httpClient.post<Users[]>('http://localhost:8080//findUserForAdmin', users);
  } 
  public findAllUsersForAdmin(): Observable<Users[]>{
    return this.httpClient.get<Users[]>('http://localhost:8080//findAllUsersForAdmin');
  } 
  public deleteUser(users){
    return this.httpClient.delete<Users>('http://localhost:8080//delete' + '/' + users.usersId);
  }
  public confirmUser(number){
    return this.httpClient.get<null>('http://localhost:8080//contest'+'/'+ number);
  }
  public userAccount(id): Observable<Users>{
  return this.httpClient.get<Users>('http://localhost:8080//userAccount' + '/' + id);
  }

  public userLogIn(users): Observable<Users>{
    //console.log('test call');
    return this.httpClient.post<Users>('http://localhost:8080//userLogInPath', users);
    //return this.httpClient.get<users>('http://localhost:8080//logIn')
  }

}
