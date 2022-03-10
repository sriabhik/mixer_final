import { Component, OnInit } from '@angular/core';
import { AddCenterService } from 'src/app/service/add-center.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public centerData: any;
  constructor(
    private _api: AddCenterService
  ) { }

  ngOnInit(): void {
    this._api.getCenter().subscribe((data:any) => (this.centerData = data));
  }

}
