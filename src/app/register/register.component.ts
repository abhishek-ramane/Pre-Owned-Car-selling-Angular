import { Component, OnInit } from '@angular/core';
import { OwnerRegisterService } from '../services/owner-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  id:number=null;
  email:string=null;
  password:string=null;
  name:string=null;
  mobile:string=null;
  address:string=null;
  username:string=null;
  typeOfUser:string=null;
  constructor(private service:OwnerRegisterService,private router:Router) { }

  ngOnInit() {
  }
  register(event){
    event.preventDefault();
    this.service.registerOwnerOrBuyer(this.id,this.name,this.email,this.password,this.mobile,this.address,this.typeOfUser)
    .subscribe(response=>{
      console.log("Inserted Record");
      this.router.navigate(["/login"]);
    })
  }
}
