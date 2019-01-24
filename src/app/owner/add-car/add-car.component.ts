import { Component, OnInit, Input } from '@angular/core';
import { AddcarService } from '../../services/addcar.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(private service:AddcarService) {
    this.user=JSON.parse(sessionStorage.getItem("user"));
   }

  ngOnInit() {}

    car_brand:string;
    car_registration_year:number;
    traveled_distance:number;
    expected_price:number;
    car_status:string;
    user:any=[];
    car_varient:string;
    car_model:string;

  @Input() carImageName:string;

   addCar(event:Event){
     event.preventDefault();
     console.log(this.carImageName);

        this.service.addCarService(
        this.car_registration_year,
        this.traveled_distance,
        this.expected_price,
        this.car_status,
        this.carImageName,
        this.car_brand,
      this.user.owner_id,
      this.car_varient,
     this.car_model
    ).subscribe(response=>{
        console.log(response);

      });
   }

}
