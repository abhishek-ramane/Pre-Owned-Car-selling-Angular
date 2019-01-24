import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginService,private route:Router) { }
  username:string=null;
  password:string=null;
  typeOfUser:string=null;
  valid:any=null;
  validate:boolean=false;

  ngOnInit() {
  }
 login(event){
  event.preventDefault();
  this.service.loginUser(this.username,this.password,this.typeOfUser).subscribe(response=>{
    //console.log(response);

   this.valid=response;
   // console.log(this.valid);
    if(this.valid._body!=""){
      this.valid=response.json();
      console.log(this.validate);
      console.log(JSON.stringify(this.valid));
      sessionStorage.setItem("user",JSON.stringify(this.valid));
      if(this.typeOfUser=="owner"){
      this.route.navigate(['/owner']);
      }
      else{
        this.route.navigate(['/cars']);
      }
      this.service.setLoggedIn(true);
    }
    else {
      alert('Invalid username or password');
    }
  })
 }

 singUp(){
  this.route.navigate(['/cars']);
 }

}
