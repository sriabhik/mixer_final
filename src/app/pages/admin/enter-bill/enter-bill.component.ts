import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminCenterService } from 'src/app/service/admin-center.service';
import { LoginService } from 'src/app/service/login.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-enter-bill',
  templateUrl: './enter-bill.component.html',
  styleUrls: ['./enter-bill.component.css']
})
export class EnterBillComponent implements OnInit {

  constructor(
    private _route:ActivatedRoute,
    private _product:ProductService,
    private _snake :MatSnackBar,
    private _admin_center:AdminCenterService,
    private login:LoginService,
    private _router:Router
    ) { }
  productId:any
  BillRecipet:any
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
  BillingData={
    customer_name:'',
    repair_Cost:'',
    productName:'',
    serviceCenterName:'',
    customer_Contact:'',
    product:{
        pId:''
    }
  }
  userData:any
  user_Id:any
  ngOnInit(): void {
    this.productId = this._route.snapshot.params['pId']
    this.BillingData.product.pId = this.productId
    console.log(this.productId);
    this.user_Id = this._route.snapshot.params['id']
    console.log(this.user_Id);
    this._product.getAppointmentByProductId(this.productId).subscribe((data)=>{
      this.productDetails = data
   },(error)=>{
     this._snake.open("Something went wrong","Cancel",{duration:2000})
   })
    this._product.getAppointmentByUser(this.user_Id).subscribe((data:any)=>{
      this.userData = data
      for (let i = 0; i < this.userData.length; i++) {
        if(this.userData[i].pId == this.productId){
          this.BillingData.serviceCenterName = this.userData[i].serviceCenter.serviceCenterName
          this.BillingData.productName = this.userData[i].productName
        }
        console.log(this.BillingData.productName);
        console.log(this.BillingData.serviceCenterName)
      }
      console.log(this.userData);
      
    },(error)=>{
      this._snake.open("Something Went Wrong","Cancel",{duration:2000})
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
    this.productDetail.status = true
    // this.productDetails.serviceCenter.serviceCenterID= this.serviceCenterID
    if(this.productDetails.productName.trim()==''|| this.productDetails.productName.trim()==null){
      this._snake.open("product Name Required","Cancel",{duration:2000})
      return;
      
    }
    else if(this.productDetails.modelNumber.trim()==''|| this.productDetails.modelNumber.trim()==null){
      this._snake.open("product model Number Required","Cancel",{duration:2000})
      return;
    }
    else if(this.productDetails.contactNumber.trim() == ''|| this.productDetails.contactNumber.trim()==null){
      this._snake.open("product contact Number Required","Cancel",{duration:2000})
      return;
    }
    else if(this.productDetails.enterProblem.trim() == ''|| this.productDetails.enterProblem.trim()==null){
      this._snake.open("product Describe Problem Required","Cancel",{duration:2000})
      return;
    }
    
    
    this._product.updateProduct(this.productDetail).subscribe((success)=>{
      console.log("Success");
      
      
     
    },(error:any)=>{
      console.log(error);
      this._snake.open("Error occur","Cancel",{duration:2000})
    })
  
    // 
   
    if(this.BillingData.repair_Cost.trim()==''){
      this._snake.open("Enter Repair Cost","Cancel",{duration:2000})
      return
    }
    this.BillingData.customer_name = this.userData[0].user.name
  
    this.BillingData.customer_Contact = this.userData[0].user.mobileNumber
   
   
    this._product.addBill(this.BillingData).subscribe((data)=>{
      this.BillRecipet = data
      console.log(this.BillingData);
      
      
      this._snake.open("Bill Added Successfully","Cancel",{duration:2000})
      this._router.navigate(['/admin/centerProfile'])
      
    },(error)=>{
      console.log(error);
      
      this._snake.open("Something Went Wrong","Cancel",{duration:3000})
    })
  }
}
