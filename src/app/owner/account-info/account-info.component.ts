import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  private Owner:any;
  constructor() {
    this.Owner=JSON.parse(sessionStorage.getItem("user"));
    console.log(this.Owner);

   }

  ngOnInit() {
  }


}
