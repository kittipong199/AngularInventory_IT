
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

// service
import { ItemsService } from 'src/app/service/items.service';

//model

import { ItemAll,postItem, getProject,getBrand,getType } from 'src/app/models/items.model';


import {NgForm,FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-create-newitems',
  templateUrl: './create-newitems.component.html',
  styleUrls: ['./create-newitems.component.css']
})
export class CreateNewitemsComponent implements OnInit {

  //form: FormGroup;
  projectlist: getProject[]= [];
  brandlist: getBrand[]= [];
  typelist: getType[]= [];
  constructor(private fb: FormBuilder, private http: HttpClient, private services:ItemsService) {


  }


  form = new FormGroup({
    'project_name':new FormControl('',Validators.required),
    'serial_numbar':new FormControl('',Validators.required),
    'brand_name':new FormControl('',Validators.required),
    'type_name':new FormControl('',Validators.required),
    'fixasset':new FormControl('0',Validators.required),
    'item_details':new FormControl('',Validators.required)
   });
  // addItem: postItem[] = [];


  ngOnInit(): void {

    this.getProjects();
    this.getBrands();
    this.getTypes();

   }
   //
   getProjects(){
    this.services.getProject().subscribe((data: getProject[])=> {
      console.log(data, "res ==> project : ");
      this.projectlist = data;
    });
  }
  getBrands(){
    this.services.getBrand().subscribe((data: getBrand[])=> {
      console.log(data, "res ==> brandlist : ");
      this.brandlist = data;
    });
  }

  getTypes(){
    this.services.getType().subscribe((data: getType[])=> {
      console.log(data, "res ==> typelist : ");
      this.typelist = data;
      
    });
  }

  submitForm(){

    if(this.form.valid){
      alert(JSON.stringify(this.form.value));
      this.services.createItem(this.form.value).subscribe((res)=>{
      console.log(res, 'res==>');
      // หลังจาก ส่งdata แล้ว จะ reset ใน input ทั้งหมด
      this.form.reset();
    });

  }

   }
  }






