import { ItemAll } from '../models/items.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {


  // baseApiUrl:  string = environment.baseApiUrl;
  constructor(private http: HttpClient, private router: Router) { }
  // connect to backend
   geturl = 'http://127.0.0.1:3000/read';
   posturl =  'http://127.0.0.1:3000/create';
  // get API สำหรับดึงข้อมูล Items List

  // getItemsList() {
  //   return this.http.get<ItemAll[]>('http://127.0.0.1:3000/read');
  // }

   getAllItem(): Observable<any>{
    return this.http.get(`${this.geturl}`);
}

  createItem(data:any): Observable<any>{

    console.log(data,'createapi=>');

    return this.http.post(`${this.posturl}`,data);

  }

}
