import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/cart/cart';
import { CartServiceService } from 'src/app/cart/cart-service.service';
import { Item } from 'src/app/user-item/item';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-user-view-restaurant-items',
  templateUrl: './user-view-restaurant-items.component.html',
  styleUrls: ['./user-view-restaurant-items.component.css']
})
export class UserViewRestaurantItemsComponent implements OnInit {

  restaurantName:string="";
   
  items:Item[]=[];
  totalRecords:number=0;
  page:number=1;
 
  count1:number=0;
  count2:number=0;
  count3:number=0;
  count4:number=0;
  
  cart:Cart=new Cart();
  term:any;
  constructor(private itemService:RestaurantServiceService,private router:Router,private cartService:CartServiceService) { }
  ngOnInit(): void {
   this.getRestaurantItems();
  }
  public getRestaurantItems(){
    let restName:string;
    restName=this.itemService.getName();
    this.itemService.getAllRestaurantItemsList(restName).subscribe(data=>{
      this.items=data;
    },
    err=>{
      console.log(err.error);
    }
    );
    
  }
  doAddItemsToCart(item:Item){
    this.cart.items.push(item);
    alert("Item Added to Cart Successfully!");
  }
  goToCart(){
    this.cartService.setCart(this.cart);
    this.router.navigate(['cart']);
  }
  sortItemsByID(){
    this.items.sort(function(a,b){
      return  a.itemId-b.itemId;
     });
  }
sortItemsById(){
 
  this.count1++;
  if(this.count1%2==0){
    this.items.sort(function(a,b){
      return  a.itemId-b.itemId;
     });
  }
  else{
    this.items.sort(function(a,b){
      return  b.itemId-a.itemId;
     });
  }
  //this.count1++; 
}
sortItemsByName(){
  
  this.count2++;
  if(this.count2%2==0){ 
    this.items.sort(function(a,b){
      let x=a.itemName.toLocaleLowerCase();
      let y=b.itemName.toLocaleLowerCase();
      if(x>y){
        return -1;
      }
      if(x<y){
        return 1;
      }
      return 0;
    });
}
  else{
    this.items.sort(function(a,b){
      let x=a.itemName.toLocaleLowerCase();
      let y=b.itemName.toLocaleLowerCase();
      if(x<y){
        return -1;
      }
      if(x>y){
        return 1;
      }
      return 0;
    });
  }
  //this.count2++;
}

sortItemsByCategory(){
  this.count3++;
  if(this.count3%2==0){
    this.items.sort(function(a,b){
      let x=a.category.toLocaleLowerCase();
      let y=b.category.toLocaleLowerCase();
      if(x<y){
        return -1;
      }
      if(x>y){
        return 1;
      }
      return 0;
    });
}
  else{
    this.items.sort(function(a,b){
      let x=a.category.toLocaleLowerCase();
      let y=b.category.toLocaleLowerCase();
      if(x>y){
        return -1;
      }
      if(x<y){
        return 1;
      }
      return 0;
    });
  }
  //this.count3++;
}

sortItemsByCost(){
  this.count4++;
  if(this.count4%2==0){
    this.items.sort(function(a,b){
      return  b.cost-a.cost;
     });
  }
  else{
    this.items.sort(function(a,b){
      return  a.cost-b.cost;
     });
  }
  //this.count4++;
}

  goToHome(){
    this.router.navigate(['user']);
  }
  logout(){
    alert("Logout Successfully");
      this.router.navigate(['login']);
    }
}