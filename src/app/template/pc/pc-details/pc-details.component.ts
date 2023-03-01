import { ActivatedRoute } from '@angular/router';
import { PcService } from 'src/app/service/pc.service';
import { Component, OnInit } from '@angular/core';
import { PcList } from 'src/app/models/pc/pc.modle';

@Component({
  selector: 'app-pc-details',
  templateUrl: './pc-details.component.html',
  styleUrls: ['./pc-details.component.css']
})
export class PcDetailsComponent implements OnInit {
  pcId:any;
  constructor(public Api:PcService,private route:ActivatedRoute ) {

    this.route.params.subscribe(p => {
      this.pcId=p['pcId'];
    });
    console.log(this.pcId);
  }

  pcDetailModel:PcList[]=[];

  ngOnInit(): void {

    this.showPcDetails();
  }

  showPcDetails(){
    this.Api.getPcDetails(this.pcId).subscribe((data: PcList[])=>{
      console.log("res Pc Detail =>",data);
      console.log(this.pcDetailModel);
      this.pcDetailModel = data;
    });
  }

}
