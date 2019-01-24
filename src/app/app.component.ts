import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service:LoginService,private router:Router){
  }

  notLoggedIn(){
    return this.service.isLoggedIn;
  }

  logout(){
    localStorage.setItem('loggedIn','false');
    sessionStorage.clear();
    this.router.navigate([""]);
  }

  title = 'Pre-Ownend';
  imgUrl:string="http://localhost:8080/Pre-owned-vehical-selling";
}
