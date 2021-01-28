import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlSerializer } from '@angular/router';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
/* tslint:disable */
export class User{
   public userId: string;
   public nickname: string;
   public name: string;
    public lastname: string;
    public passwords: Passwords;
    public dateOfTheVisit: DateOfTheVisit;
 
  constructor(userId: string,nickname: string,name: string,lastname: string, password: Passwords,dateOfTheVisit: DateOfTheVisit ){
    this.userId = userId;
    this.nickname = nickname
    this.name = name;
    this.lastname = lastname;
    this.passwords = password;
  }
}

export class Passwords{
  public password: string;
  constructor(password: string){
    this.password = password;

  }
}

export class DateOfTheVisit{
  public dateof: string;
  constructor(dateof: string){
    this.dateof = dateof;
  }
}


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

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


  public addVisit(user){
    return this.httpClient.post<User>('http://localhost:8080//addTerms',user);
  }

  public createUser(user) {
    return this.httpClient.post<User>('http://localhost:8080//create',user);
  }

  public testDate(y): Observable<String[]>{
    return this.httpClient.post<String[]>('http://localhost:8080//test',y);
  } 
  public findUser(user): Observable<User>{
    return this.httpClient.post<User>('http://localhost:8080//findUser', user);
  } 

public deleteUser(user){
    return this.httpClient.delete<User>('http://localhost:8080//delete' + '/' + user.userId);
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
