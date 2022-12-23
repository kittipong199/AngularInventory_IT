import { getTypeCount, ItemAll, } from 'src/app/models/items.model';
import { Component, Input, OnInit } from '@angular/core';

import { ItemsService } from 'src/app/service/items.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { response } from 'express';
import { json } from 'sequelize';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  @Input('sendtype') details: any;
  constructor(
    public ApiService:ItemsService) { }

  itemcount: getTypeCount[]= [];
  ItemAllList: ItemAll[]=[];
  typeChild = this.itemcount;
  data_type: any;
    public CountsType = 0;

    //  countter(){
    //    this.itemcount;

    //  }

  ngOnInit(): void {

    this.getData();
    alert(this.details);
   }


   // get all data from item table
   getData(){

    this.ApiService.getAllItem().subscribe((data: ItemAll[])=> {
      console.log(data, "res ==>");
      console.log(this.ItemAllList);
      this.ItemAllList = data;
    });

   }

   sendtype(){
    this.ApiService.getAllItem = this.ApiService.getAllItem;
     this.typeChild = this.itemcount;
    //  this.data_type = [type_name,brand_name];
     console.log(this.data_type);
     return this.data_type;
   }

  //  deleteID(id:number){
  //   this.ApiService.Deleteitem(id).subscribe((data: ItemAll[])=>{
  //       console.log(data, 'delete == >');
  //       this.ItemAllList = data;
  //   });
  //  }

  }
