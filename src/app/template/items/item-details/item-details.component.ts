import { getTypeCount, ItemAll,getItemDetails } from 'src/app/models/items.model';
import { Component, Input, OnInit } from '@angular/core';

import { ItemsService } from 'src/app/service/items.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { response } from 'express';
import { json } from 'sequelize';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {


  typeId :any;
  brandId:any;
  projectId:any;
  constructor(
    public ApiService:ItemsService ,private router:ActivatedRoute, private location: Location)
    {
      // this.typeId = router.snapshot.queryParamMap.get('type_id');
      // this.brandId = router.snapshot.queryParamMap.get('brand_id');
      // console.log(this.brandId = router.snapshot.queryParamMap.get('brand_id'));

      this.router.params.subscribe(p => {
        this.typeId= p['typeId'];
        this.projectId= p['projectId'];
      });
      console.log(this.projectId);
    }

  itemcount: getTypeCount[]= [];
  ItemAllList: getItemDetails[]=[];


  getparamTypeId:any;
  getBrandId:any;




  ngOnInit(): void {


    this.getData();


   }


   // get itmeDetail data from item manage table
   getData(){
    // const type_id = Number(this.router.snapshot.paramMap.get('type_id'));
    // const brand_id = Number(this.router.snapshot.paramMap.get('brand_id'));
    this.ApiService.getDetailsItme(this.typeId,this.projectId).subscribe((data: getItemDetails[])=> {
      console.log(data, "res itme Detail==>");
      console.log(this.ItemAllList);
      this.ItemAllList = data;
    });

   }


  //  deleteID(id:number){
  //   this.ApiService.Deleteitem(id).subscribe((data: ItemAll[])=>{
  //       console.log(data, 'delete == >');
  //       this.ItemAllList = data;
  //   });
  //  }

  }
