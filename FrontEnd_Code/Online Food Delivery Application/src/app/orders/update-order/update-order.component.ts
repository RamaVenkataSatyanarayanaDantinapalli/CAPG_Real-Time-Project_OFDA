import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from '../orderservice.service';
import { Orders } from '../orders';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
    orderId:number=0;
    newOrderStatus: String="";
    order:Orders=new Orders();
  constructor(private activatedRouter:ActivatedRoute,private orderService:OrderserviceService,private router:Router) { }

  ngOnInit(): void {
    this.orderId=this.orderService.orderId;
    this.newOrderStatus=this.orderService.orderStatus;
   // this.orderId = this.activatedRouter.snapshot.params['orderId'];
    //this.newOrderStatus=this.activatedRouter.snapshot.params['orderStatus'];
  }
  doUpdateOrders(value:any)
  {
    console.log("OrderId"+this.orderId);
    //console.log("orderStatus"+this.oldOrderStatus);
    console.log("new Order Status"+this.newOrderStatus);
   // this.newOrderStatus=value.orderStatus;
    this.orderService.updateOrders(this.orderId,this.newOrderStatus).subscribe(data=>{
      this.order=data;
      
      console.log("Data Updated");
      
    },
    error=>console.log(error));
    this.goToOrdersList();
  }
  goToOrdersList()
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
