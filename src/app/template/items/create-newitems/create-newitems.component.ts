import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

// service
import { ItemsService } from 'src/app/service/items.service';

//model

import { ItemAll,postItem } from 'src/app/models/items.model';


import {NgForm,FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-create-newitems',
  templateUrl: './create-newitems.component.html',
  styleUrls: ['./create-newitems.component.css']
})
export class CreateNewitemsComponent implements OnInit {

  // form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private services:ItemsService) {
    // this.form = this.fb.group(
    //   {
    //     serial_no: [''],
    //     brand_name: [''],
    //     type_name: [''],
    //     fixasset: [''],
    //     details: ['']
    //      project_name
    //   } private fb: FormBuilder,
    // );

  }

  form = new FormGroup({

    'brand_name':new FormControl('',Validators.required),
    'type_name':new FormControl('',Validators.required),
    'serial_numbar':new FormControl('',Validators.required),
    'fixasset':new FormControl('',Validators.required),
    'item_details':new FormControl('',Validators.required),
    'project_name':new FormControl('',Validators.required),
   });

  //  ItemAllList: ItemAll[]= [];
  // addItem: postItem[] = [];


  ngOnInit(): void {


   }

   submitForm(){
    if(this.form.valid){
    alert(JSON.stringify(this.form.value));
    this.services.createItem(this.form.value).subscribe((res)=>{
      console.log(res, 'res==>');
    });
  }

   }
  }



  //  itemSubmit(){
  //     console.log(this.itemForm.value);

  //  }


  //  addNewProduct(product: any){


  //   console.log(this.productNewData.value);
  //   this.ps.addProduct(product);

  // }
  //  onSubmit(itemForm: NgForm){
  //   // ดึง data value from ngModule in html

  //   // const values = itemForm.value;
  //   console.log(itemForm.value);
  //   // alert(value);

  //  }

   // get all data from item table
    // getData(){
    //  this.ApiService.getAllItem().subscribe((data: ItemAll[])=> {
    //    console.log(data, "res ==>");
    //    this.ItemAllList = data;
    //  });

    // }

  //  createNewItem(){
  //   this.Newitemform = this.
  //  }



