import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminCenterService } from 'src/app/service/admin-center.service';
import { ProductService } from 'src/app/service/product.service';
import { DatePipe } from '@angular/common';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css'],
  providers:[DatePipe]
})
export class UpdateAppointmentComponent implements OnInit {
  productDetail={ 
      pId:'',
      productName: '',
      modelNumber: '',
      contactNumber: '',
      enterProblem:'',
      status: false,
      dateOfPurchase: '',
      serviceCenter: {
          serviceCenterID: ''       
      },
      user: {
          
          id: ''    
      }
  }
  productDetails:any
  constructor(
    private _admin_center:AdminCenterService,
    private _snake:MatSnackBar,
    private _route:ActivatedRoute,
    private _product:ProductService,
    private login:LoginService,
    private datePipe: DatePipe,
    private _router :Router
  ) { }
  pId:any
  ngOnInit(): void {
    this.pId = this._route.snapshot.params['pId']
    this._product.getAppointmentByProductId(this.pId).subscribe((data)=>{
      this.productDetails = data
   },(error)=>{
     this._snake.open("Something went wrong","Cancel",{duration:2000})
   })
   
  }
  formSubmit(){
    this.productDetail.pId = this.productDetails.pId
    this.productDetail.productName = this.productDetails.productName
    this.productDetail.modelNumber = this.productDetails.modelNumber
    this.productDetail.contactNumber = this.productDetails.contactNumber
    this.productDetail.enterProblem = this.productDetails.enterProblem
    this.productDetail.dateOfPurchase = this.productDetails.dateOfPurchase
    this.productDetail.serviceCenter.serviceCenterID =  this.productDetails.serviceCenter.serviceCenterID
    this.productDetail.user.id = this.productDetails.user.id 
    // this.productDetails.serviceCenter.serviceCenterID= this.serviceCenterID
    if(this.productDetails.productName.trim()==''|| this.productDetails.productName.trim()==null){
      this._snake.open("product Name Required","Cancel",{duration:2000})
      return;
      
    }
    if(this.productDetails.modelNumber.trim()==''|| this.productDetails.modelNumber.trim()==null){
      this._snake.open("product model Number Required","Cancel",{duration:2000})
      return;
    }
    if(this.productDetails.contactNumber.trim() == ''|| this.productDetails.contactNumber.trim()==null){
      this._snake.open("product contact Number Required","Cancel",{duration:2000})
      return;
    }
    var s = (String)(this.productDetails.contactNumber)
    console.log(s.length);
    
    if(s.length < 10 || s.length>10 ){
      this._snake.open("Enter valid mobile number of length 10","Cancel",
      {duration:2000})
        return;
    }
    if(this.productDetails.enterProblem.trim() == ''|| this.productDetails.enterProblem.trim()==null){
      this._snake.open("product Describe Problem Required","Cancel",{duration:2000})
      return;
    }
    if(this.productDetails.dateOfPurchase.trim()!=''){
      let date3 = new Date(this.productDetails.dateOfPurchase)
    
      let date2 = new Date();this.datePipe.transform(new Date(), 'MM-dd-yyyy');
      let Time = date3.getTime() - date2.getTime(); 
      let Days = Time / (1000 * 3600 * 24);
      if(Days < 0){
        this._snake.open("Appointment Date Can not be less than the current date ","Cancel",{duration:5000})
        return
      }
      else if(Days>5){
        this._snake.open("Appointment Date must be within in 5 Days range from Current Date","cancel",{duration:5000})
        return
      }
      
    }
    this._product.updateProduct(this.productDetail).subscribe((success)=>{
      console.log("Success");
      
      this._snake.open("Appointment Update Successfull","Cancel",{duration:2000})
      
     
    },(error:any)=>{
      console.log(error);
      this._snake.open("Error occur","Cancel",{duration:2000})
    })
    this._router.navigate(['/customer/user-homepage'])
  }
}
