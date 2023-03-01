
import { ItemAll } from '../models/items.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PcService {

  // baseApiUrl:  string = environment.baseApiUrl;
  constructor(private http: HttpClient, private router: Router) { }

   // connect to backend
   getcpuUrl = 'http://chbwapp001:5000/getpc/pc/cpu/details';

   getmainboardUrl = 'http://chbwapp001:5000/getpc/pc/mainboard/details';

   getpowerdUrl = 'http://chbwapp001:5000/getpc/pc/power/details';
   getramdUrl = 'http://chbwapp001:5000/getpc/pc/ram/details';

   getstoragedUrl = 'http://chbwapp001:5000/getpc/pc/storage/details';



   postNewPcUrl = 'http://chbwapp001:5000/pc/create/new/pc';

   getPcListUrl = 'http://chbwapp001:5000/getpc/pc/all';

   getPcDetail = 'http://chbwapp001:5000/getpc/pc/';

   getCpu(): Observable<any>{
    return this.http.get(`${this.getcpuUrl}`);
  }


  getMainBoard(): Observable<any>{
    return this.http.get(`${this.getmainboardUrl}`);
  }

  getPower(): Observable<any>{
    return this.http.get(`${this.getpowerdUrl}`);
  }

  getRam(): Observable<any>{
    return this.http.get(`${this.getramdUrl}`);
  }

  getStorage(): Observable<any>{
    return this.http.get(`${this.getstoragedUrl}`);
  }

  getPcDetails(pc_id:any): Observable<any>{
    return this.http.get(`${this.getPcDetail}/${pc_id}`);
  }

  getPcList(): Observable<any>{
    return this.http.get(`${this.getPcListUrl}`);
  }


  // Post  Itemcollection Table
  createNewPc(data:any): Observable<any>{

    console.log(data,'createapi=>');

    return this.http.post(`${this.postNewPcUrl}`,data);

  }
}
