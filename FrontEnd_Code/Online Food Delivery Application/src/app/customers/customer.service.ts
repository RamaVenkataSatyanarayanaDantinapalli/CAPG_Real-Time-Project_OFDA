import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../address';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer:Customer=new Customer();
  address:Address=new Address();
  private baseURL = "http://localhost:8084/app/";
  
  setCustomer(customer:Customer){
    this.customer=customer;
  }
  getCustomer(){
    return this.customer;
  }
  setCustomerAddress(address:Address){
    this.address=address;
  }
  getCustomerAddress(){
    return this.address;
  }
  private viewAllCustomers_endpoint=this.baseURL+'viewallcustomers';
  private addCustomer_endpoint=this.baseURL+'addcustomer';
  constructor(private httpClient: HttpClient) { }

  getCustomersList(): Observable<Customer[]>{
    console.log("Customer Service - get All Customers");
    return this.httpClient.get<Customer[]>(this.viewAllCustomers_endpoint);
  }
  addCustomer(customer:Customer):Observable<object>{
    return this.httpClient.post(`${this.addCustomer_endpoint}`,customer);
  }
 /* addCustomer(customer: Customer):Observable<Object>{
    console.log("Customer Service - Add Customer");
    console.log(customer);
    let opt=this.httpClient.post<Customer>("http://localhost:8084/app/addcustomer",customer);
    if(opt){
      alert("Customer Registion Successfully");
      return opt;
    }
    else{
      alert("Item Not Updated!");
      return opt;
    }
    
  }*/
  

 
}
