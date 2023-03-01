import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Login } from '../models/users/users.model';

import { BehaviorSubject } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  urlRegister = 'http://127.0.0.1:5000/user/register';
  urlLogin = 'http://127.0.0.1:5000/user/login';


  createNewUser(data:any): Observable<any>{

    console.log(data,'createapi=>');

    return this.http.post(`${this.urlRegister}`,data);

  }



  login(data:any): Observable<any> {
    return this.http.post(`${this.urlLogin}`,data) ;

}

  authUser(user:any){
    let UserArray = [];
    if (localStorage.getItem('Users')) {
      //  UserArray = JSON.parse(localStorage.getItem('Users'));
    }
    // return UserArray.find(p => p.fullName === user.fullName && p.en === user.en)
  }
  }
