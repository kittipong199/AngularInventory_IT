import { getStatus } from './../../../models/items.model';
import { Component, OnInit ,AfterViewInit,  ElementRef, OnDestroy, ViewChild} from '@angular/core';

import { HttpClient,HttpClientModule } from '@angular/common/http';

import { UserService } from 'src/app/service/user.service';


import { Register } from 'src/app/models/users/users.model';

import {NgForm,FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute,Router, RouterLink } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  firstNameAutofilled: boolean = false;
  lastNameAutofilled: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private services:UserService ,private router:ActivatedRoute, private router2: Router,private cookieService:CookieService) { }
  httpStatus: boolean = false;
  // if (http.status == 200) {
  //   httpStatus = true;
  // } else {

  // }
  private cookie_name ='';
  private all_cookies:any;

  form = new FormGroup({
    'fullName':new FormControl('',Validators.required),
    'en':new FormControl('',Validators.required)

   });
  ngOnInit(): void {
    this.onLogin();
    //this.setCookie();
    // this.cookieService.set('name','Tutorialswebsite');
    this.cookie_name=this.cookieService.get('name');
    this.all_cookies=this.cookieService.getAll();
  }
  setCookie(){
    this.cookieService.set('name','Tutorialswebsite');
     this.cookie_name=this.cookieService.get('name');  // get the cookie value
    this.all_cookies=this.cookieService.getAll();
  }
  onLogin(){

      // const token = this.services.
     if(this.form.valid){
       alert(JSON.stringify(this.form.value));
       this.services.login(this.form.value).subscribe((res)=>{
       console.log(res.status, 'res==>');
       if (res.status == 200){
           this.router2.navigate(['/home/',this.form.value.en])
       }
        //หลังจาก ส่งdata แล้ว จะ reset ใน input ทั้งหมด
        this.httpStatus = true;
       this.form.reset();
     });
  }
  }
}



