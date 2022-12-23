
import { getTypeCount, ItemAll,getType } from 'src/app/models/items.model';
import { Component, OnInit,Input,Output } from '@angular/core';

import { ItemsService } from 'src/app/service/items.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { response } from 'express';
import { json } from 'sequelize';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items-manage',
  templateUrl: './items-manage.component.html',
  styleUrls: ['./items-manage.component.css']
})
export class ItemsManageComponent implements OnInit {




  constructor(
    public ApiService:ItemsService) { }

  itemcount: getTypeCount[]= [];
  type:getType[]=[];
  ItemAllList: ItemAll[]=[];

   typeChild = this.itemcount;
    data_type: any;
     public CountsType = 0;

     countter(){
       this.itemcount;

     }

  ngOnInit(): void {

    this.getData();
    this.sendtype;

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
    this.ApiService.Deleteitem(id).subscribe((data: ItemAll[])=>{
        console.log(data, 'delete == >');
        this.ItemAllList = data;
    });
   }

   sendtype(type_name:any,brand_name:any){
    //this.ApiService.getAllItem = this.ApiService.getAllItem;
     this.typeChild = this.itemcount;
     this.data_type = [type_name,brand_name];
     console.log(this.data_type);
    // return this.data_type;
   }
  }


