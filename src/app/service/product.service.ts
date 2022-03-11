import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public  addProduct(data:any){
    return this.http.post(`${baseUrl}/user/appointment`,data);
  }
  public  updateProduct(data:any){
    console.log(data);
    
    return this.http.put(`${baseUrl}/user/appointment/update`,data);
  }
  public getBookingDetail(id:any){
    return this.http.get(`${baseUrl}/user/getAppointmentByUser/${id}`)
  }
  public deleteBooking(productId:any){
    return this.http.delete(`${baseUrl}/user/cancelappointment/${productId}`)
  }

  
  public getAppointmentByServiceCenterId(sId:any){
    return this.http.get(`${baseUrl}/user/getAppointment/${sId}`)
  }

  public addBill(BillData:any){
    return this.http.post(`${baseUrl}/Bill/addBill`,BillData)
  }

  public getAppointmentByUser(user_Id:any){
    return this.http.get(`${baseUrl}/user/getAppointmentByUser/${user_Id}`)
  }

  public getAppointmentByProductId(PId:any){
    return this.http.get(`${baseUrl}/user/getAppointmentpid/${PId}`)
  }
  public getBillByProductId(pId:any){
    return this.http.get(`${baseUrl}/Bill/getBillbyProduct/${pId}`)
  }
}
