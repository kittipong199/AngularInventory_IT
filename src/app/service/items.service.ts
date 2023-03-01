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
   geturl = 'http://chbwapp001:5000/get/all ';



   getbrandurl = 'http://chbwapp001:5000/get/brand ';
   gettypeurl = 'http://chbwapp001:5000/get/type ';

   get_type_Counturl = 'http://chbwapp001:5000/get/type/count_type';


   // get typy ID and Brand Id for show next Details Component
   get_type_brand_byid = 'http://chbwapp001:5000/get/';

  ///////////////////******************************* */

   getprojecturl = 'http://chbwapp001:5000/get/project ';

   getstatus = 'http://chbwapp001:5000/get/status ';



   posturl =  'http://chbwapp001:5000/item/create';

   patchurl =  'http://chbwapp001:5000/item/update/:id';

   posttypeurl =  'http://127.0.0.1:5000/item/create/type';
   postbrandurl =  'http://localhost:5000/item/create/brand';

   deleteItem = 'http://chbwapp001:5000/item/delete/:id';
  // get API สำหรับดึงข้อมูล Items List

  // getItemsList() {
  //   return this.http.get<ItemAll[]>('http://chbwapp001:5000/read');
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

  createType(data:any): Observable<any>{

    console.log(data,'createapi=>');

    return this.http.post(`${this.posttypeurl}`,data);

  }

  createBrand(data:any): Observable<any>{
    console.log(data,'createapi=>');
    return this.http.post(`${this.postbrandurl}`,data);

  }


  EditProduct(id: any, body: any) {

    return this.http.put(`${this.patchurl}` + id, body);
  }


  getDetailsItme(type_id:any,brand_id:any): Observable<any>{


    // let brand_ids = brand_id;
    return this.http.get(`${this.get_type_brand_byid}/${type_id}/${brand_id}`);
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

 // get all Brand Table
 getStatus(): Observable<any>{
  return this.http.get(`${this.getstatus}`);
}


Deleteitem(id:number): Observable<any>{

  let ids = id;
  return this.http.delete(`${this.deleteItem}/${ids}`);
}

}
