// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-edit-center',
//   templateUrl: './edit-center.component.html',
//   styleUrls: ['./edit-center.component.css']
// })
// export class EditCenterComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AdminCenterService } from 'src/app/service/admin-center.service';

@Component({
  selector: 'app-edit-center',
  templateUrl: './edit-center.component.html',
  styleUrls: ['./edit-center.component.css']
})
export class EditCenterComponent implements OnInit {
  serviceCenterID = 0
  ServiceCenterData:any


  constructor(    private _admin_center:AdminCenterService,
                  private _snake:MatSnackBar,
                  private _route:ActivatedRoute,
                  private _router:Router
                  ) { }

  ngOnInit(): void {
    console.log(this.serviceCenterID);
    
    this.serviceCenterID = this._route.snapshot.params['serviceCenterID']
  
    this._admin_center.getServiceCenter(this.serviceCenterID).subscribe((data:any)=>{
      this.ServiceCenterData = data

    },
    (error:any)=>{
      this._snake.open("Something Went Wrong !","Cancel",{duration:2000})
      return
    })
    
  }
  formSubmit(){
    this.ServiceCenterData.serviceCenterID = this.serviceCenterID;
    this.ServiceCenterData.serviceCenterImageUrl = this.ServiceCenterData.serviceCenterImageUrl;
    if(this.ServiceCenterData.serviceCenterName.trim() == ''|| this.ServiceCenterData.serviceCenterName ==null){
      this._snake.open("Center Name Required !","Cancel",{duration:2000})
      return;
      
    }
    else if(this.ServiceCenterData.serviceCenterPhone.trim() == ''|| this.ServiceCenterData.serviceCenterPhone ==null){
      this._snake.open("Phone Number Required !","Cancel",{duration:2000})
      return;
      
    }
    else if(this.ServiceCenterData.serviceCenterAddress.trim() == ''|| this.ServiceCenterData.serviceCenterAddress ==null){
      this._snake.open("Center Address Required !","Cancel",{duration:2000})
      return;
      
    }
    else if(this.ServiceCenterData.serviceCenterMailId.trim() == ''|| this.ServiceCenterData.serviceCenterMailId ==null){
      this._snake.open("Email Required !","Cancel",{duration:2000})
      return;
    }

    this._admin_center.updateServiceCenter(this.ServiceCenterData).subscribe((success:any)=>(
      this._snake.open("Updated Successfully","Cancel",{duration:2000})
      
      
    ),(error:any)=>[
      this._snake.open("Something Went Wrong","Cancel",{duration:2000})
    ])
    
    
  }         
}
