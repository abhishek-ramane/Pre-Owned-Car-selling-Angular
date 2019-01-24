import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AddcarService {




  private url:string ="http://localhost:8080/Pre-owned-vehical-selling/car/add-car";
  constructor(private http:Http) { }

  addCarService(
    car_registration_year:number,
    traveled_distance:number,
    expected_price:number,
    car_status:string,
    imageName:string,
    car_brand:string,
    owner_id:number,
    car_varient:string,
    car_model:string
  ){

      var header=new Headers({'Content-Type':'application/json'});
    var requestOption=new RequestOptions({headers:header});

    var body:any={
      owner_id:owner_id,
      car_registration_year:car_registration_year,
      traveled_distance:traveled_distance,
      expected_price:expected_price,
      car_status:"AVAILABLE",
      car_image:"/upload/"+imageName,
      car_brand:car_brand,
      car_varient:car_varient,
      car_model:car_model
    };
    return this.http.post(this.url,body)
  }

}
