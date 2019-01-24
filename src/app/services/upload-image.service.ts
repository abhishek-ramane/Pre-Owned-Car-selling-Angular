import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
private url:string="http://localhost:8080/Pre-owned-vehical-selling/upload/car";
  constructor(private http:Http) { }

  uploadCarImage(file:File){
    const fd=new FormData();
    fd.append('file',file,file.name);
    return this.http.post(this.url,fd)
  }

}
