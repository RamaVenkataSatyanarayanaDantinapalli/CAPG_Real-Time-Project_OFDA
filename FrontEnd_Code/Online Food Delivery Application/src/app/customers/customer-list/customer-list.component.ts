import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  term:any;
  customers: Customer[]=[];

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }
  private getCustomers()
  {
    this.customerService.getCustomersList().subscribe(data => {
      this.customers = data;
    });
  }

  editCustomer(id: number){

    this.router.navigate(['updateCustomer']);
  }
  goToHome(){
    this.router.navigate(['admin']);
  }
  logout(){
    alert("Logout Successfully");
      this.router.navigate(['login']);
    } 
}
