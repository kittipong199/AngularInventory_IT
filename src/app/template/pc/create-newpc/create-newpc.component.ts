
// Model
import { getProject ,getStatus} from 'src/app/models/items.model';
import { CpuDetails,MainBoardDetails ,PowerDetails,RamDetails,StrorageDetails} from 'src/app/models/pc/pc.modle';


import { Component, OnInit } from '@angular/core';

// Service
import { ItemsService } from 'src/app/service/items.service';
import { PcService } from 'src/app/service/pc.service';

// Http
import { HttpClient } from '@angular/common/http';

// NgForm
import {NgForm,FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-create-newpc',
  templateUrl: './create-newpc.component.html',
  styleUrls: ['./create-newpc.component.css']
})
export class CreateNewpcComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient,  private service:ItemsService,private pcservice:PcService ) { }
  projects: getProject[]=[];
  statusList: getStatus[]=[];

  cpu: CpuDetails[]=[];

  mainboard: MainBoardDetails[]=[];
  power: PowerDetails[]=[];
  ram: RamDetails[]=[];

  storage: StrorageDetails[]=[];
  // ลิส
  aio_and_pc: String[] =['aio','pcset'];
   ramSolt: String[] = ['1','2','3','4'];

   pcsize: String[] = ['BASE','TOWER'];
   iocard: String[] = ['Long','Short'];
   lanCard: String[] = ['Yes','No'];

  form = new FormGroup({
    'project_name':new FormControl('',Validators.required),
    'status_name':new FormControl('',Validators.required),
    'pc_hostname':new FormControl('',Validators.required),
    'fixasset':new FormControl('',Validators.required),

    'is_aio':new FormControl('',Validators.required),


    'serial_no':new FormControl('',Validators.required),
    'dongle_Id':new FormControl('',Validators.required),
    'cpu':new FormControl('',Validators.required),
    'mainboard':new FormControl('',Validators.required),
    'power':new FormControl('',Validators.required),
    'ram_solt':new FormControl('',Validators.required),
    'ram':new FormControl('',Validators.required),
    'storage':new FormControl('',Validators.required),
    'pc_size':new FormControl('',Validators.required),
    'io_card':new FormControl('',Validators.required),
    'lan_card':new FormControl('',Validators.required),
    'pc_details':new FormControl('',Validators.required),
   });
  ngOnInit(): void {
    this.getProjects();
    this.getStatus();
    this.getCpu();
    this.getMainBoard();
    this.getPower();
    this.getRam();
    this.getStorage();
  }



  getProjects(){
    this.service.getProject().subscribe((data: getProject[])=> {
      console.log(data, "res ==> project : ");
      this.projects = data;
    });
  }


  getStatus(){
    this.service.getStatus().subscribe((data: getStatus[])=> {
      console.log(data, "res ==> status : ");
      this.statusList = data;
    });
  }

  getCpu(){
    this.pcservice.getCpu().subscribe((data: CpuDetails[])=> {
      console.log(data, "res ==> CPU : ");
      this.cpu = data;
    });
  }

  getMainBoard(){
    this.pcservice.getMainBoard().subscribe((data: MainBoardDetails[])=> {
      console.log(data, "res ==> mainboard : ");
      this.mainboard = data;
    });
  }

  getPower(){
  this.pcservice.getPower().subscribe((data: PowerDetails[])=> {
    console.log(data, "res ==> Powersupply : ");
    this.power = data;
  });
}


getRam(){
  this.pcservice.getRam().subscribe((data: RamDetails[])=> {
    console.log(data, "res ==> Ramsupply : ");
    this.ram = data;
  });
}

getStorage(){
  this.pcservice.getStorage().subscribe((data: StrorageDetails[])=> {
    console.log(data, "res ==> Ramsupply : ");
    this.storage = data;
  });
}



submitForm(){

  if(this.form.valid){
    alert(JSON.stringify(this.form.value));
    this.pcservice.createNewPc(this.form.value).subscribe((res)=>{
    console.log(res, 'res==>');
    // หลังจาก ส่งdata แล้ว จะ reset ใน input ทั้งหมด
    this.form.reset();
  });

}

 }

}
