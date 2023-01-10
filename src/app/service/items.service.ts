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
   geturl = 'http://127.0.0.1:3000/get/all ';



   getbrandurl = 'http://127.0.0.1:3000/get/brand ';
   gettypeurl = 'http://127.0.0.1:3000/get/type ';

   get_type_Counturl = 'http://127.0.0.1:3000/get/type/count_type';


   // get typy ID and Brand Id for show next Details Component
   get_type_brand_byid = 'http://127.0.0.1:3000/get/:type_id/:brand_id';

  ///////////////////******************************* */

   getprojecturl = 'http://127.0.0.1:3000/get/project ';

   getstatus = 'http://127.0.0.1:3000/get/status ';



   posturl =  'http://127.0.0.1:3000/item/create';
   patchurl =  'http://127.0.0.1:3000/item/update/:id';

   deleteItem = 'http://127.0.0.1:3000/item/delete/:id';
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
