import { Component, OnInit, Input, Output } from '@angular/core';
import { CarListComponent } from '../car-list/car-list.component';
import { EventEmitter } from 'events';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

   selectedCar:number;

  constructor() {
    this.showCarDetail();
    console.log("HEllo"+JSON.parse(sessionStorage.getItem("user")));
  }
  ngOnInit() {
  }

  showCarDetail(){
  console.log(this.selectedCar);
  }

}
