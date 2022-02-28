import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  isLoggedIn = false;
  user = null;
  constructor(public login:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.isLoggedIn= this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data: any)=>{
      this.isLoggedIn= this.login.isLoggedIn();
      this.user = this.login.getUser();
    });
  }
  public logout(){
    this.login.logout();
    this.isLoggedIn=false;
    this.user=null;
    
    this.router.navigate([''])
    // window.location.reload();
    // window.location.href="/login"
  }
}
