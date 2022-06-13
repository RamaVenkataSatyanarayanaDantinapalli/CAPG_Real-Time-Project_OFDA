import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderserviceService } from '../orderservice.service';
import { AppComponent } from 'src/app/app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@Component({
  selector: 'app-view-all-orders',
  templateUrl: './view-all-orders.component.html',
  styleUrls: ['./view-all-orders.component.css']
})
export class ViewAllOrdersComponent implements OnInit {

  orders:any[]=[];
  totalRecords:number=0;
  page:number=1;
  orderService:OrderserviceService ;
  term:any;
  count1:number=0; 
  count2:number=0;
  count3:number=0;
  filterData:any;
  constructor(orderService:OrderserviceService,private router:Router) { 
    this.orderService=orderService;
  }
       
  ngOnInit(): void {
    this.getAllOrders();
  }
  private getAllOrders()
  {
    this.orderService.getAllOrders().subscribe(data=>{
      this.orders=data;
      this.totalRecords=data.length;
    },
    err=>{
      console.log(err.error);
    });
  }
  updateOrders(orderId:number,orderStatus:string)
   {
     this.orderService.orderId=orderId;
     this.orderService.orderStatus=orderStatus;
      this.router.navigate(['updateOrder'])
   }
   deleteOrders(orderId:number)
   {
     
      this.orderService.deleteOrders(orderId).subscribe(data=>{
        console.log(data);
        this.getAllOrders();
      })
   }
   orderDetails(orderId:number)
   {
     this.orderService.orderId=orderId;
    this.router.navigate(['viewOrderById']);
    //this.orderService.getOrderById(orderId);
    //this.gotoOrders();
    
   }
   sortOrdersById(){
    this.count1++;
    if(this.count1%2==0){
      this.orderService.sortOrdersById().subscribe(data=>{
        this.orders=data;
        this.totalRecords=data.length;
      },
      err=>{
        console.log(err.error);
      }
      );
    }
    else{
      this.orderService.sortOrdersByIdDesc().subscribe(data=>{
        this.orders=data;
        this.totalRecords=data.length;
      },
      err=>{
        console.log(err.error);
      }
      );
    }
    //this.count1++;
  }
  sortOrdersByDate(){
    this.count2++;
    if(this.count2%2!=0){
      this.orderService.sortOrdersByDate().subscribe(data=>{
        this.orders=data;
        this.totalRecords=data.length;
      },
      err=>{
        console.log(err.error);
      }
      );
    }
    else{
      this.orderService.sortOrdersByDateDesc().subscribe(data=>{
        this.orders=data;
        this.totalRecords=data.length;
      },
      err=>{
        console.log(err.error);
      }
      );
    }
    //this.count2++;
  }
  sortOrdersByStatus(){
    this.count3++;
    if(this.count3%2!=0){
      this.orderService.sortOrdersByStatus().subscribe(data=>{
        this.orders=data;
        this.totalRecords=data.length;
      },
      err=>{
        console.log(err.error);
      }
      );
    }
    else{
      this.orderService.sortOrdersByStatusDesc().subscribe(data=>{
        this.orders=data;
        this.totalRecords=data.length;
      },
      err=>{
        console.log(err.error);
      }
      );
    }
    //this.count3++;
  }
   goToHome(){
    this.router.navigate(['admin']);
  }
  logout(){
    alert("Logout Successfully");
      this.router.navigate(['login']);
    }
  /*gotoOrders()
    {
      this.router.navigate(['viewOrderById']);
    }*/

}
