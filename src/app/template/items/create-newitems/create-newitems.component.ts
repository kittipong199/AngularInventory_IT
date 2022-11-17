
import { Component, OnInit } from '@angular/core';

// service
import { ItemsService } from 'src/app/service/items.service';
import { ProductsService } from 'src/app/service/products.service';
//model
import { Product } from 'src/app/models/product';
import { ItemAll,postItem } from 'src/app/models/items.model';


import {NgForm,FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-create-newitems',
  templateUrl: './create-newitems.component.html',
  styleUrls: ['./create-newitems.component.css']
})
export class CreateNewitemsComponent implements OnInit {

// [x: string]: FormGroup<any>;

  // addItem: any = {};

  constructor(private ps:ProductsService) { }

   ItemAllList: ItemAll[]= [];
  // addItem: postItem[] = [];


  ngOnInit(): void {


   }

  //  itemForm = new FormGroup({
  //   'serial_no':new FormControl('',Validators.required),
  //   'brand_name':new FormControl('',Validators.required),
  //   'type_name':new FormControl('',Validators.required),
  //   'fixasset':new FormControl('',Validators.required)
  //  });

  //  itemSubmit(){
  //     console.log(this.itemForm.value);

  //  }

   addNewProduct(product: any){


    console.log(this.productNewData.value);
    this.ps.addProduct(product);

  }
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


  }
