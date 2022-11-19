
import { ItemAll, } from 'src/app/models/items.model';
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

  ItemAllList: ItemAll[]= [];



  ngOnInit(): void {

    this.getData();
   }


   // get all data from item table
   getData(){
    this.ApiService.getAllItem().subscribe((data: ItemAll[])=> {
      console.log(data, "res ==>");
      this.ItemAllList = data;
    });

   }


  }


