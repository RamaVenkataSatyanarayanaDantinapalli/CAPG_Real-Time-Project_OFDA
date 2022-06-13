import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderserviceService } from '../orderservice.service';
import { Orders } from '../orders';
import { AppRoutingModule } from 'src/app/app-routing.module';
@Component({
  selector: 'app-view-order-by-id',
  templateUrl: './view-order-by-id.component.html',
  styleUrls: ['./view-order-by-id.component.css']
})
export class ViewOrderByIdComponent implements OnInit {
  orderId: number=0;
  order: any;
  constructor(private route:ActivatedRoute,private orderService:OrderserviceService,private router:Router) { }

  ngOnInit(): void {
    this.orderId=this.orderService.orderId;
   // this.orderId=this.route.snapshot.params['orderId'];
    this.orderService.getOrderById(this.orderId).subscribe(data=>{
      this.order=data;
      console.log(this.order);
    });
  }
  goToHome(){
    this.router.navigate(['admin']);
  }
  logout(){
    alert("Logout Successfully");
      this.router.navigate(['login']);
    }  
}
