import { Component, OnInit, Output } from '@angular/core';
import { CarService } from '../services/car.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars:any=[];
  imgUrl:string;
  selectedCar:number;
  constructor(private service:CarService,private app:AppComponent,private router:Router) {
    this.getAllCars();
    this.imgUrl=app.imgUrl;
   }


   getAllCars(){
    this.service.getAllAvailableCars().subscribe(response=>{
      var result=response.json();
      this.cars=result;
      console.log(this.cars);
    })
   }

   showOwner(event){
    event.preventDefault();
     console.log(event);
     this.selectedCar=event.path[2].childNodes[1].childNodes[1].innerHTML;
   // this.router.navigate(["/car-details"]);
   }

  ngOnInit() {
  }
}
