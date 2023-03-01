import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { UserService } from 'src/app/service/user.service';


import { Register } from 'src/app/models/users/users.model';

import {NgForm,FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, private services:UserService) { }


  form = new FormGroup({
    'fullName':new FormControl('',Validators.required),
    'en':new FormControl('',Validators.required)

   });
  ngOnInit(): void {
  }


  submitForm(){

    if(this.form.valid){
      alert(JSON.stringify(this.form.value));
      this.services.createNewUser(this.form.value).subscribe((res)=>{
      console.log(res, 'res==>');
      // หลังจาก ส่งdata แล้ว จะ reset ใน input ทั้งหมด
      this.form.reset();
    });

  }
}
}
