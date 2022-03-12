import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-page',
  templateUrl: './router-page.component.html',
  styleUrls: ['./router-page.component.css']
})
export class RouterPageComponent implements OnInit {

  constructor(
    private _route:Router
  ) { }
  i = 0
  ngOnInit(): void {
    if(this.i==0){
        this._route.navigate(['customer/user-homepage'])
        this.i = this.i + 1
    }
  }

}
