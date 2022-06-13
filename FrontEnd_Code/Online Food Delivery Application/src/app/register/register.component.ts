import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../address';
import { Customer } from '../customers/customer';
import { CustomerService } from '../customers/customer.service';
import { Login } from '../login/login';
import { LoginServiceService } from '../login/login-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer:Customer=new Customer();
  address:Address=new Address();
  login:Login=new Login();
  Login:Login=new Login();
  submitted=false;
  cpassword:string="";
  constructor(private router:Router,private customerService:CustomerService,private loginService:LoginServiceService){}
  ngOnInit(): void {
    this.submitted=false;
    this.customer=this.customerService.getCustomer();
    this.customer.address=this.customerService.getCustomerAddress();
  }
  saveCustomer(){
    this.customerService.addCustomer(this.customer).subscribe(data => {
      console.log(data);
      //this.goToCustomerList();
    },
    error => console.log(error));
  }
  onSubmit(){
    if(this.login.password==this.Login.password){
    console.log(this.customer);
    
    this.customerService.addCustomer(this.customer);
    //this.loginService.addUser(this.login);
    //alert("User Registration successfully");
    //this.router.navigate(['login']);
    //this.doCheckCredentials();
    }
    else{
      alert("Password do not match");
    }
  }
  doLogin(){
    this.router.navigate(['login']);
  }

  doRegister(){
    this.router.navigate(['register']);
  }
  
 /* doCheckCredentials(){
    let adminName=this.login.userName.localeCompare('admin');
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
    }
    }*/

}
