import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-admin',
  templateUrl: './homepage-admin.component.html',
  styleUrls: ['./homepage-admin.component.css']
})
export class HomepageAdminComponent implements OnInit {

  constructor(
      private _route : Router
  ) { }
  i = 0
  ngOnInit(): void {
    if(this.i == 0){
    this._route.navigate(['admin/centerProfile'])
      this.i = this.i + 1
    }
  }

}
