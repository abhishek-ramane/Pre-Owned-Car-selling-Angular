import { BrowserModule } from '@angular/platform-browser';
import { NgModule, RootRenderer } from '@angular/core';
import { RouterModule,Route } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarService } from "./services/car.service";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OwnerRegisterService } from './services/owner-register.service';
import { CarDetailsComponent } from './car-details/car-details.component';
import { OwnerComponent } from './owner/owner.component';
import { AddCarComponent } from './owner/add-car/add-car.component';
import { ImageUploadComponent } from './owner/add-car/image-upload/image-upload.component';
import { UploadImageService } from './services/upload-image.service';
import { OwnerService } from './services/owner.service';
import { AccountInfoComponent } from './owner/account-info/account-info.component';
import { BuyerComponent } from './buyer/buyer.component';
import { AuthGuard } from "./authentication/auth.guard";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    LoginComponent,
    RegisterComponent,
    CarDetailsComponent,
    OwnerComponent,
    AddCarComponent,
    ImageUploadComponent,
    AccountInfoComponent,
    BuyerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'cars',component:CarListComponent},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'car-details',component:CarDetailsComponent},
      {path:'owner',component:OwnerComponent, canActivate:[AuthGuard] },
      {path:'add-car',component:ImageUploadComponent,canActivate:[AuthGuard]}
    ])
  ],
  providers: [CarService,OwnerRegisterService,UploadImageService,OwnerService,AuthGuard,CarListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
