// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AdminCenterService {

//   constructor() { }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AdminCenterService {

  constructor(private _http:HttpClient) { }

  // //adding center
  // public addServiceCenter(CenterData:any){
  //   return this._http.post(`${baseUrl}/admin/addServiceCenter`,CenterData)
  // }

  // //get all service center
  // public getAllServiceCenter(){
  //   return this._http.get(`${baseUrl}/admin/getServiceCenter`)
  // }
  
  //get one center at a time
  public getServiceCenter(CenterId:any){
    return this._http.get(`${baseUrl}/admin/getServiceCenter/${CenterId}`)
  }
  //update Center
  public updateServiceCenter(CenterData:any){
    return this._http.post(`${baseUrl}/admin/updateServiceCenter`,CenterData)
  }
  
  // //delete Center
  // public deleteCenter(CenterId:any){
  //   return this._http.delete(`${baseUrl}/admin/deleteServiceCenter/${CenterId}`)
  // }
}

