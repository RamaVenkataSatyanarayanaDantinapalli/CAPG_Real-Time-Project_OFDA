import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService, private router: Router) { }
  
  ngOnInit(): void {
  }

  updateCustomer(){
    this.customerService.addCustomer(this.customer).subscribe(data => {
      console.log(data);
      this.customer = new Customer();
      this.goToCustomerList();
    },error => console.log(error));
  }

  goToCustomerList(){
    this.router.navigate(['/customers']);

  }

  onSubmit(){
    console.log(this.customer);
    this.updateCustomer();
  }
  goToHome(){
    this.router.navigate(['admin']);
  }
  logout(){
    alert("Logout Successfully");
      this.router.navigate(['login']);
    } 

}
