import { Component, OnInit } from '@angular/core';
import { UploadImageService } from '../../../services/upload-image.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  owner:any=[];
  constructor(private service:UploadImageService) {
     this.owner=sessionStorage.getItem('user');
     console.log(this.owner);

  }
  uploaded:boolean=false;
  uploadedFileName:string=null;
  name:string="Image Name";
  file:File;
  fileName:string;
  responseData:any=[];

  ngOnInit() {
  }

  imageAdded(event){
    this.file=event.target.files[0];
    this.fileName=event.target.files[0].name;
  }

  uploadImg(){
    console.log(this.file);
    this.service.uploadCarImage(this.file).subscribe(response=>{
      this.responseData=response;
      //console.log(this.responseData._body);
      this.fileName=this.responseData._body;
    //  this.uploadedFileName="http://localhost:8080/Pre-owned-vehical-selling/images/"+response._body+".jpg";
      this.uploaded=true;
    });
  }

}
