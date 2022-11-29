
import { getTypeCount, ItemAll, } from 'src/app/models/items.model';
import { Component, OnInit } from '@angular/core';

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
    private ApiService:ItemsService) { }

  ItemAllList: getTypeCount[]= [];

    public CountsType = 0;

    countter(){
      this.ItemAllList;

    }

  ngOnInit(): void {

    this.getData();
   }


   // get all data from item table
   getData(){
    this.ApiService.getAllItem().subscribe((data: getTypeCount[])=> {
      console.log(data, "res ==>");
      console.log(this.ItemAllList);
      this.ItemAllList = data;
    });

   }

   deleteID(id:any){
    this.ApiService.Deleteitem(id).subscribe((res)=>{
        console.log(res, 'delete == >');
    });
   }

  }


