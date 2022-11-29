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
   geturl = 'http://127.0.0.1:3000/getall ';

   posturl =  'http://127.0.0.1:3000/create';

   getbrandurl = 'http://127.0.0.1:3000/getbrand ';
   gettypeurl = 'http://127.0.0.1:3000/gettype ';

   get_type_Counturl = 'http://127.0.0.1:3000/gettype/count_type ';
   getprojecturl = 'http://127.0.0.1:3000/getproject ';


   patchurl =  'http://127.0.0.1:3000/update/:id';



   deleteItem = 'http://127.0.0.1:3000/delete/:id';
  // get API สำหรับดึงข้อมูล Items List

  // getItemsList() {
  //   return this.http.get<ItemAll[]>('http://127.0.0.1:3000/read');
  // }
  // get all Itemcollection Table
   getAllItem(): Observable<any>{
    return this.http.get(`${this.geturl}`);
  }
    // Post  Itemcollection Table
  createItem(data:any): Observable<any>{

    console.log(data,'createapi=>');

    return this.http.post(`${this.posturl}`,data);

  }

  EditProduct(id: number, body: any) {

    return this.http.put(`${this.patchurl}` + id, body);
  }




 // get all Brand Table
 getBrand(): Observable<any>{
  return this.http.get(`${this.getbrandurl}`);
}
 // get all Typr Table
 getType(): Observable<any>{
  return this.http.get(`${this.gettypeurl}`);
}

 // get Count Typr Table


 getTypeCount(): Observable<any>{
  return this.http.get(`${this.get_type_Counturl}`);
}

  // get all Project Table
  getProject(): Observable<any>{
    return this.http.get(`${this.getprojecturl}`);
}



Deleteitem(id:any): Observable<any>{

  let ids = id;
  return this.http.delete(`${this.deleteItem}/${ids}`);
}

}
