import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log(this.customer);
    this.saveCustomer();
  }
  goToCustomerList(){
    this.router.navigate(['/customer']);

  }

  
  saveCustomer(){
    this.customerService.setCustomer(this.customer);
    this.router.navigate(['addCustomerAddress']);
  }
  goToHome(){
    this.router.navigate(['admin']);
  }
  login(){
      this.router.navigate(['login']);
    } 
}
