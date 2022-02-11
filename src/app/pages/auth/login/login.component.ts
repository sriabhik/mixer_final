import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginData={
    email:'',
    password:''
  }

  loginData={
    username:'',
    password:''
  }

  constructor(private _snake:MatSnackBar,private login:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  formSubmit(){
    this.loginData.username = this.LoginData.email
    this.loginData.password = this.LoginData.password
    if(this.LoginData.email.trim()=='' || this.LoginData.email==null){
      this._snake.open("Email Required"," ",{duration:2000})
      this.LoginData.password=''
    }
    else if(this.LoginData.password.trim()==''|| this.LoginData.password==null){
      this._snake.open("Password Required","Cancel",{duration:2000});
      this.LoginData.email=''
      return;
    }

    this.login.LoginData(this.loginData).subscribe((data:any)=>{
      console.log("success");
      console.log(data);

      //login...
      this.login.loginUser(data.token);
      //refeer interceptor file
      this.login.getCurrentUser().subscribe((user:any)=>{
        this.login.setUser(user);
        console.log(user);
        if(user.password == this.loginData.password){
            // redirect if admin
          // redirect if normal 
          if(this.login.getUserRole()=='admin'){
            //adimin dashboard
            // window.location.href="/admin"
            this.router.navigate(['admin'])
            this.login.loginStatusSubject.next(true);
          }
          else if(this.login.getUserRole()=='customer'){
            //normal user
            // window.location.href="/user-dashboard"
            this.router.navigate(['customer'])
            this.login.loginStatusSubject.next(true);
          }
        }
        else{
          this._snake.open("Wrong Password","Cancel",{duration:2000})
          this.LoginData.email=''
          this.LoginData.password=''
          this.router.navigate([''])
          
       } 
     })
    },
    (error)=>{
      console.log("error")
      console.log(error)
      this._snake.open("Invalid Details","Cancel",{duration:2000})
    })
  }
}
