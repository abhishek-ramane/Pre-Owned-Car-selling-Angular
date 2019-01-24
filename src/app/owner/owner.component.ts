import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../services/owner.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})

export class OwnerComponent implements OnInit {
  Owner:any=null;
  cars=[];
  imgUrl:string;
  selectedCar:number;
  constructor(private service:OwnerService,private app:AppComponent) {
    this.Owner=JSON.parse(sessionStorage.getItem("user"));
    this.service.getOwnerById(this.Owner.owner_id).subscribe(response=>{
      this.Owner=response.json();
      sessionStorage.setItem("user",JSON.stringify(this.Owner));
      this.cars=this.Owner.carList;
      console.log(this.cars);
      this.imgUrl=this.app.imgUrl;
    })
   }
  ngOnInit() {
  }

  delete(event){
    event.preventDefault();
    console.log(event.path[2].children[1].childNodes[1].innerHTML);
    this.selectedCar=event.path[2].children[1].childNodes[1].innerHTML;
    console.log(event);
    event.path[2].remove();
    this.service.deleteCarById(this.selectedCar).subscribe(response=>{
    console.log(response.json());
    })
  }

}
