import { HttpClient } from '@angular/common/http';
import { getProject ,getStatus} from 'src/app/models/items.model';
import { CpuDetails,MainBoardDetails ,PowerDetails,RamDetails,StrorageDetails, PcList} from 'src/app/models/pc/pc.modle';




// Service

import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/service/items.service';
import { PcService } from 'src/app/service/pc.service';

@Component({
  selector: 'app-pc-manage',
  templateUrl: './pc-manage.component.html',
  styleUrls: ['./pc-manage.component.css']
})
export class PcManageComponent implements OnInit {

  constructor(private http: HttpClient,  private service:ItemsService,private pcservice:PcService) { }
  PcList: PcList[]=[];
  ngOnInit(): void {

    this.getData();
  }


  getData(){
    this.pcservice.getPcList().subscribe((data: PcList[])=> {
      console.log(data, "res ==>");
      console.log(this.PcList);
      this.PcList = data;
    });

   }
}
