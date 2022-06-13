import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from '../orders';
import { OrderserviceService } from '../orderservice.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
 // order:Orders=new Orders(0,new Date(),'');
 order:Orders=new Orders();
  constructor(private orderService:OrderserviceService,private router:Router) { 

  }

  ngOnInit(): void {
  }
  createOrder()

  {
    this.orderService.saveOrder(this.order).subscribe(data=>{
      console.log(data);
      this.goToAllOrders();
    })
  }
  onSubmit()
  {
    console.log(this.order);
    this.createOrder();
  }
  goToAllOrders()
  {
    this.router.navigate(['viewAllOrders']);
  }
  goToHome(){
    this.router.navigate(['admin']);
  }
  logout(){
    alert("Logout Successfully");
      this.router.navigate(['login']);
    } 
}
