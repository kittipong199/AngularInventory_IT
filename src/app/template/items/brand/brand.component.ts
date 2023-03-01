import { Component, OnInit } from '@angular/core';
import {NgForm,FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// service
import { ItemsService } from 'src/app/service/items.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(private http: HttpClient,private services:ItemsService) { }



  form = new FormGroup({
    'brand_name':new FormControl('',Validators.required),
    'remarks':new FormControl('',Validators.required)

   });
  ngOnInit(): void {
  }
  onAdd(){
    if(this.form.valid){
      alert(JSON.stringify(this.form.value));
      this.services.createBrand(this.form.value).subscribe((res)=>{
      console.log(res, 'res==>');
      // หลังจาก ส่งdata แล้ว จะ reset ใน input ทั้งหมด
      this.form.reset();
    });

  }

   }
}
