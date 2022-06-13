import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/address';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-add-customer-address',
  templateUrl: './add-customer-address.component.html',
  styleUrls: ['./add-customer-address.component.css']
})
export class AddCustomerAddressComponent implements OnInit {

  address:Address=new Address();
  submitted=false;
  totalRecords:number=0;
  page:number=1;
  constructor(private customerService:CustomerService,private router:Router){}

  ngOnInit(): void {
    this.submitted=false;
  }
  
  onSubmit(){
    //console.log(this.restaurant);
    this.doUpdateServer();
  
  }
  
  doUpdateServer(){
    this.customerService.setCustomerAddress(this.address);
    this.router.navigate(['register']);
}


goToHome(){
  this.router.navigate(['admin']);
}
login(){
  
    this.router.navigate(['login']);
  } 

}
