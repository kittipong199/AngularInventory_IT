import { FormGroup, FormBuilder } from '@angular/forms';

import { getTypeCount, ItemAll,getType,getItmeDetails } from 'src/app/models/items.model';
import { Component, OnInit,Input,Output } from '@angular/core';

import { ItemsService } from 'src/app/service/items.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { response } from 'express';
import { json } from 'sequelize';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items-manage',
  templateUrl: './items-manage.component.html',
  styleUrls: ['./items-manage.component.css']
})
export class ItemsManageComponent implements OnInit {
  itmeDetails !: FormGroup;



  constructor(
    public ApiService:ItemsService,private router:ActivatedRoute, private formbuilder: FormBuilder) { }

  itemcount: getTypeCount[]= [];
  type:getType[]=[];
  ItemAllList: ItemAll[]=[];

  ItemDetails: getItmeDetails[]=[];

  getparameid:any;
  type_id: any;




  ngOnInit(): void {

    this.getData();





   }


   // get all data from item table
   getData(){
    this.ApiService.getTypeCount().subscribe((data: getTypeCount[])=> {
      console.log(data, "res ==>");
      console.log(this.itemcount);
      this.itemcount = data;
    });

   }



   deleteID(id:number){
    this.ApiService.Deleteitem(id).subscribe((data: getItmeDetails[])=>{
        console.log(data, 'delete == >');
        this.ItemDetails = data;
    });
   }

  //  sendtypeDetails(data:any){
  //     this.itmeDetails.controls['itme_id'].setValue(data.item_id);
  //     this.itmeDetails.controls['project_name'].setValue(data.project_name);
  //     this.itmeDetails.controls['serial_no'].setValue(data.serial_no);
  //     this.itmeDetails.controls['type_name'].setValue(data.type_name);
  //     this.itmeDetails.controls['brand_name'].setValue(data.brand_name);

  //     console.log(this.data);
  //  }

  }


