
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
   getcpuUrl = 'http://127.0.0.1:3000/get/pc/cpu/details';

   getmainboardUrl = 'http://127.0.0.1:3000/get/pc/mainboard/details';

   getpowerdUrl = 'http://127.0.0.1:3000/get/pc/power/details';
   getramdUrl = 'http://127.0.0.1:3000/get/pc/ram/details';

   getstoragedUrl = 'http://127.0.0.1:3000/get/pc/storage/details';



   postNewPcUrl = 'http://127.0.0.1:3000/pc/create/new/pc';

   getPcListUrl = 'http://127.0.0.1:3000/get/pc/pcList';

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

  getPcList(): Observable<any>{
    return this.http.get(`${this.getPcListUrl}`);
  }


  // Post  Itemcollection Table
  createNewPc(data:any): Observable<any>{

    console.log(data,'createapi=>');

    return this.http.post(`${this.postNewPcUrl}`,data);

  }
}
