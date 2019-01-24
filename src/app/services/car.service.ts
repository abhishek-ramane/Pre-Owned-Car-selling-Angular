import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
private url:string='http://localhost:8080/Pre-owned-vehical-selling/car';
  constructor(private http:Http) { }

  getAllAvailableCars(){
    return this.http.get(this.url);
  }
}
