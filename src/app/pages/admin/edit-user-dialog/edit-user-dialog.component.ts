// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-edit-user-dialog',
//   templateUrl: './edit-user-dialog.component.html',
//   styleUrls: ['./edit-user-dialog.component.css']
// })
// export class EditUserDialogComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserDisplayService } from 'src/app/service/user-display.service';
@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css'],
})
export class EditUserDialogComponent implements OnInit {
  editUserForm!: FormGroup;
  constructor(
    private _snack:MatSnackBar,
    private _formBuilder: FormBuilder,
    private _api: UserDisplayService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {}

  ngOnInit(): void {
    this.editUserForm = this._formBuilder.group({
      id:[''],
      name:[''],
      userRole:[''],
      password:[''],
      username: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),
        ],
      ],
      mobileNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
          Validators.maxLength(12),
        ],
      ],
    });
    if (this.editData) {
      this.editUserForm.controls['id'].setValue(this.editData.id);
      this.editUserForm.controls['password'].setValue(this.editData.password);
      this.editUserForm.controls['name'].setValue(this.editData.name)
      this.editUserForm.controls['userRole'].setValue(this.editData.userRole)
      this.editUserForm.controls['username'].setValue(this.editData.email);
      this.editUserForm.controls['email'].setValue(this.editData.email);
      this.editUserForm.controls['mobileNumber'].setValue(
        this.editData.mobileNumber
      );
    }
  }
  
  get userName() {
    return this.editUserForm.get('name');
  }
  get email() {
    return this.editUserForm.get('email');
  }
  get phoneNumber() {
    return this.editUserForm.get('mobileNumber');
  }
  updateUser() {
    console.log(this.editUserForm.value);
    
    if (this.editUserForm.valid) {
      this._api
        .updateUsers(this.editUserForm.value)
        .subscribe({
          next: (res:any) => {
            console.log(res);
            
            this._snack.open("User Updated Successfully","Cancel",{duration:2000})
            this.editUserForm.reset();
            this.dialogRef.close('update');
          },
          error: () => {
            this._snack.open("Error Occurred","Cancel",{duration:2000})
          },
        });
    }
  }
}