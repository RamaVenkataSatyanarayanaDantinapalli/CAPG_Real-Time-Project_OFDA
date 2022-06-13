import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';
import { LoginServiceService } from './login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login=new Login();
  user:Login=new Login();
  users:Login[]=[];
  submitted=false;
  constructor(private router:Router,private loginService:LoginServiceService){}
  ngOnInit(): void {
    this.submitted=false;
  }
  
  onSubmit(){
    console.log(this.login);
    this.doCheckCredentials();
  }
  doLogin(){
    this.router.navigate(['login']);
  }

  doRegister(){
    this.router.navigate(['addCustomer']);
  }
  
  getUser(){
    this.loginService.getUserByUserName(this.login.userName).subscribe(data=>{
      this.user=data;
    },
    err=>{
      console.log(err.error);
    }
    );
  }
  doCheckCredentials(){
    
    console.log(this.login);
    if((this.user.userName==this.login.userName)&&(this.user.password==this.login.password)&&(this.user.userRole)){
      alert("Admin Login Successfully");
      this.router.navigate(['admin']);
    }
    else if((this.user.userName==this.login.userName)&&(this.user.password==this.login.password)&&(!this.user.userRole)){
      alert("User Login Successfull");
      this.router.navigate(['user']);
    }
    else{
      alert("Login Falied!");
      location.reload();
    }
    /*let adminName=this.login.userName.localeCompare('admin');
    let adminPassword=this.login.password.localeCompare('admin@123');
    let userName=this.login.userName.localeCompare('satya');
    let userPassword=this.login.password.localeCompare('satya@123');
    if(adminName==0 && adminPassword==0){
      alert("Admin Login Successfully");
      this.router.navigate(['admin']);
    }
    else if(userName==0 && userPassword==0){
      alert("User Login Successfull");
      this.router.navigate(['user']);
    }
    else{
      alert("Login Falied!");
      location.reload();
    }*/
    }
}

