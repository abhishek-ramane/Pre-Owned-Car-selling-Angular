import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private url:String="http://localhost:8080/Pre-owned-vehical-selling"
  constructor(private http:Http) { }

  getOwnerById(id:number){
    console.log("Id="+id);
    var url1=this.url+"/owner/"+id;
    return this.http.get(url1);
  }

  deleteCarById(car_id:number){
    return this.http.delete(this.url.concat("/car/"+car_id));
  }
}
