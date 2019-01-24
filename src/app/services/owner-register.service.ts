import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerRegisterService {
private url:string="http://localhost:8080/Pre-owned-vehical-selling/";
  constructor(private http:Http) { }

  registerOwner(owner_id:number,owner_name:string,owner_email:string,owner_password:string,
    owner_mobile:string,owner_address:string){

    var header=new Headers({'Content-Type':'application/json'});
    var requestOption=new RequestOptions({headers:header});
    var body={
      owner_id:owner_id,
      owner_name:owner_name,
      owner_email:owner_email,
      owner_password:owner_password,
      owner_mobile:owner_mobile,
      owner_username:owner_email,
      owner_address:owner_address
    };
    return this.http.post(this.url+"owner/register",body,requestOption);
  }

  registerBuyer(buyer_id:number,
                buyer_name:string,
                buyer_email:string,
                buyer_password:string,
                buyer_mobile:string,
                buyer_address:string){

    var header=new Headers({'Content-Type':'application/json'});
    var requestOption=new RequestOptions({headers:header});
    var body={
      buyer_id:buyer_id,
      buyer_name:buyer_name,
      buyer_email:buyer_email,
      buyer_password:buyer_password,
      buyer_mobile:buyer_mobile,
      buyer_username:buyer_email,
      buyer_address:buyer_address
    };
    return this.http.post(this.url+"buyer/register",body,requestOption);
  }

  registerOwnerOrBuyer(id,name,email,password,mobile,address,typeOfUser:string){
    typeOfUser=typeOfUser.toLowerCase();
    if (typeOfUser=="owner") {
      console.log("Owner is Added");
       return this.registerOwner(id,name,email,password,mobile,address);
    } else {
      console.log("Buyer Is Added");
      return this.registerBuyer(id,name,email,password,mobile,address);
    }
  }

}
