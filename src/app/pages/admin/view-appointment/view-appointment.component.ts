import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  DetBySerId:any
  constructor(
      private _route:ActivatedRoute,
      private _product:ProductService,
      private _snack:MatSnackBar
  ) { }

  serviceCenterID :any
  ngOnInit(): void {
    this.serviceCenterID = this._route.snapshot.params['serviceCenterID']

   
      this._product.getAppointmentByServiceCenterId(this.serviceCenterID).subscribe((data:any)=>{
          this.DetBySerId=data
          console.log(this.DetBySerId);
          
          
      },(error)=>{
        this._snack.open("Something Went Wrong","Cancel",{duration:2000})
      })   
  
  }

}
