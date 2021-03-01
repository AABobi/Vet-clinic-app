import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UrlSerializer } from '@angular/router';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';
/* tslint:disable */
export class User{
   public id: number;
   public nickname: string;
   public name: string;
   public lastname: string;
   public email: string;
   public permissions: string;
   public passwords: Passwords;
   
 constructor(userId: number, nickname: string, name: string, lastname: string, email: string, permissions: string, passwords: Passwords ){
    this.id = userId;
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

  
constructor(userId: number,nickname: string,name: string,lastname: string,email: string,permissions: string,password: Passwords ){
   this.id = userId;
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

  
constructor(userId: number,nickname: string,name: string,lastname: string,email: string,permissions: string, password: Passwords ){
   this.id = userId;
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
public user: User;
public doctors: Doctors;
constructor(id: number,name: string, description: string, user: User, doctors: Doctors ){
  this.id = id;
  this.name = name;
  this.description = description;
  this.user = user;
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
  public user: User;
  public doctors: Doctors;

  constructor(id: number, dateof: string, user: User, doctors: Doctors){
  this.id = id;
  this.dateof = dateof;
  this.user = user;
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


  getEmployees(id) {
    console.log('test call');
    return this.httpClient.get<User>('http://localhost:8080//findAllMain1'+'/'+id);
  }

  public getVisit(){
    return this.httpClient.get<String[]>('http://localhost:8080//getTerms');
  }


  public addVisit(dateOfTheVisit){
    return this.httpClient.put<null>('http://localhost:8080//addTerms',dateOfTheVisit);
  }

  public addTermsWithoutAccount(user){
    return this.httpClient.put<null>('http://localhost:8080//addTermsWithoutAccount',user);
  }

 public createUser(user) {
    return this.httpClient.post<User>('http://localhost:8080//create',user);
  }

  public testDate(y): Observable<String[]>{
    return this.httpClient.post<String[]>('http://localhost:8080//test',y);
  } 
  public findUser(userNickName): Observable<User>{
    return this.httpClient.get<User>('http://localhost:8080//findUser'+'/'+ userNickName);
  } 

  public findUserForAdmin(user): Observable<User[]>{
    return this.httpClient.post<User[]>('http://localhost:8080//findUserForAdmin', user);
  } 
  public findAllUsersForAdmin(): Observable<User[]>{
    return this.httpClient.get<User[]>('http://localhost:8080//findAllUsersForAdmin');
  } 


public deleteUser(user){
    return this.httpClient.delete<User>('http://localhost:8080//delete' + '/' + user.userId);
  }

  public confirmUser(number){
    return this.httpClient.get<null>('http://localhost:8080//contest'+'/'+ number);
  }

public userAccount(id): Observable<User>{
  return this.httpClient.get<User>('http://localhost:8080//userAccount' + '/' + id);
}

  public userLogIn(user): Observable<User>{
    //console.log('test call');
    return this.httpClient.post<User>('http://localhost:8080//userLogInPath', user);
    //return this.httpClient.get<User>('http://localhost:8080//logIn')
  }

}
