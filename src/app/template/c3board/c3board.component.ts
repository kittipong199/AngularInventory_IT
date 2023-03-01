import { C_mainBoradtotal,C_mainBoradinstall } from 'src/app/models/c3/c3.model';
import { C3Service } from 'src/app/service/c3.service';
import { Component, OnInit } from '@angular/core';
import {CardModule} from 'primeng/card';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c3board',
  templateUrl: './c3board.component.html',
  styleUrls: ['./c3board.component.css']
})
export class C3boardComponent implements OnInit {

  constructor(public ApiService:C3Service ,private router:ActivatedRoute) { }


  c3insall: C_mainBoradtotal[]= [];
  
  ngOnInit(): void {
    this.getC3install();
    this.getC3total();
  }


  getC3install(){
    // const type_id = Number(this.router.snapshot.paramMap.get('type_id'));
    // const brand_id = Number(this.router.snapshot.paramMap.get('brand_id'));
    this.ApiService.main_board_install().subscribe((data: C_mainBoradtotal[])=> {
      console.log(data, "res itme Detail==>");
      console.log(this.c3insall);
      this.c3insall = data;
    });
}

getC3total(){
  // const type_id = Number(this.router.snapshot.paramMap.get('type_id'));
  // const brand_id = Number(this.router.snapshot.paramMap.get('brand_id'));
  this.ApiService.main_board_total().subscribe((data: C_mainBoradinstall[])=> {
    console.log(data, "res itme Detail==>");
    console.log(this.c3insall);
    this.c3insall = data;
  });


}
}
