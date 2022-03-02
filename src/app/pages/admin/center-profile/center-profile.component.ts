// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-center-profile',
//   templateUrl: './center-profile.component.html',
//   styleUrls: ['./center-profile.component.css']
// })
// export class CenterProfileComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddCenterService } from 'src/app/service/add-center.service';
import { DeleteCenterDialogComponent } from '../delete-center-dialog/delete-center-dialog.component';


@Component({
  selector: 'app-center-profile',
  templateUrl: './center-profile.component.html',
  styleUrls: ['./center-profile.component.css'],
})
export class CenterProfileComponent implements OnInit {
  constructor(
    private _api: AddCenterService,
    private _dialog: MatDialog,
    private _router: Router,
    private _snack :MatSnackBar
  ) {}
  public centerData: any;
  ngOnInit(): void {
    this._api.getCenter().subscribe((data:any) => (this.centerData = data));
  }
  gotoEdit() {
    this._router.navigate(['/editCenter']);
  }

  deleteDialog(serviceCenterID: any) {
    // console.log(serviceCenterID);
    // this._api.deleteCenter(serviceCenterID).subscribe((data) => {
    //   alert('delete successful!!');
    //   location.reload();
    //   console.log(data);
    // });

    const dialogRef = this._dialog.open(DeleteCenterDialogComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe((val) => {
      if (val == 'delete') {
        this._api.deleteCenter(serviceCenterID).subscribe((data:any) => {
          // this._router.navigate(['/confirmpage']);
          this.centerData = this.centerData.filter(
            (ServiceCenter: any) =>
              ServiceCenter.serviceCenterID != serviceCenterID
          );
          this._snack.open("Center Deleted Successfully","Cancel",{duration:2000})
          // location.reload();
          // console.log(data);
        },(error)=>{
          this._snack.open("Error Occurred","Cancel",{duration:2000})
        });
      }
    });
  }
}