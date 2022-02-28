// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AddCenterService {

//   constructor() { }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceCenter } from '../pages/admin/model/serviceCenter';


@Injectable({
  providedIn: 'root',
})
export class AddCenterService {
  constructor(private http: HttpClient) {}
  addCenter(formData: any) {
    return this.http.post<ServiceCenter[]>(
      'http://localhost:8080/admin/addServiceCenter',
      formData
    );
  }
  getCenter(): Observable<ServiceCenter[]> {
    return this.http.get<ServiceCenter[]>(
      'http://localhost:8080/admin/getServiceCenter'
    );
  }
  //delete Center
  public deleteCenter(serviceCenterID: any): Observable<any> {
    console.log('inside delete center');
    console.log(serviceCenterID);
    console.log(
      'http://localhost:8080/admin/deleteServiceCenter/' + serviceCenterID
    );
    return this.http.delete(
      'http://localhost:8080/admin/deleteServiceCenter/' + serviceCenterID
    );
  }
}