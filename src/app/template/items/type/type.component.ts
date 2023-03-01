import { Component, OnInit } from '@angular/core';
import {NgForm,FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// service
import { ItemsService } from 'src/app/service/items.service';
@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  constructor(private http: HttpClient,private services:ItemsService) { }
  form = new FormGroup({
    'type_name':new FormControl('',Validators.required),
    'remarks':new FormControl('',Validators.required)

   });

  ngOnInit(): void {
  }


  onAdd(){
    if(this.form.valid){
      alert(JSON.stringify(this.form.value));
      this.services.createType(this.form.value).subscribe((res)=>{
      console.log(res, 'res==>');
      // หลังจาก ส่งdata แล้ว จะ reset ใน input ทั้งหมด
      this.form.reset();
    });

  }

   }
}
