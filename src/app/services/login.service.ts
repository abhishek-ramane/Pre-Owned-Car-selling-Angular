import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedInStatus= JSON.parse(localStorage.getItem('loggedIn')|| 'false');

  private url:string;
  constructor(private http:Http) {
    this.url="http://localhost:8080/Pre-owned-vehical-selling/";
  }

  setLoggedIn(value:boolean){
    this.loggedInStatus=value;
    localStorage.setItem('loggedIn','true');
  }

  get isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedIn')|| this.loggedInStatus);
  }

  loginUser(username:string,password:string,typeOfUser:string){
    typeOfUser=typeOfUser.toLocaleLowerCase();
    var body={
      email:username,
      password:password
    };

    var header=new Headers({'Content-Type':'application/json'});
    var requestOption=new RequestOptions({headers:header});

    var urlTemp=this.url+typeOfUser+"/login";
    this.url="http://localhost:8080/Pre-owned-vehical-selling/";
    return this.http.post(urlTemp,body,requestOption);
  }
}
