import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class C3Service {

  constructor(private http: HttpClient, private router: Router) { }

 C3install = 'http://127.0.0.1:5000/get/C3/brand/MainBoard/status/install';

 C3total = 'http://127.0.0.1:5000/get/C3/brand/MainBoard/status/total';
 C3spare = 'http://127.0.0.1:5000/get/C3/brand/MainBoard/status/spare';
 cgminstall = 'http://127.0.0.1:5000/get/C3/brand/CGM/status/install';
 cgmtotal = 'http://127.0.0.1:5000/get/C3/brand/CGM/status/total';
 cgmspare = 'http://127.0.0.1:5000/get/C3/brand/CGM/status/spare';




 main_board_install(): Observable<any>{
  return this.http.get(`${this.C3install}`);
}
main_board_total(): Observable<any>{
  return this.http.get(`${this.C3total}`);
}
main_board_spare(): Observable<any>{
  return this.http.get(`${this.C3spare}`);
}

/// CGM//////////////////////
cgm_install(): Observable<any>{
  return this.http.get(`${this.cgminstall}`);
}
cgm_total(): Observable<any>{
  return this.http.get(`${this.cgmtotal}`);
}
cgm_spare(): Observable<any>{
  return this.http.get(`${this.cgmspare}`);
}


}
