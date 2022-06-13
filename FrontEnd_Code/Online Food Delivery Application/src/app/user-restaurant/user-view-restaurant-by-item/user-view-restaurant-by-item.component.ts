import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/address';
import { Item } from 'src/app/item/item';
import { Restaurant } from '../restaurant';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-user-view-restaurant-by-item',
  templateUrl: './user-view-restaurant-by-item.component.html',
  styleUrls: ['./user-view-restaurant-by-item.component.css']
})
export class UserViewRestaurantByItemComponent implements OnInit {

  restaurant:Restaurant=new Restaurant();
  address:Address=new Address();
  item:Item=new Item();
  restaurantId:number=-1;
  restaurantname:string="";
  restaurants:Restaurant[]=[];
  totalRecords:number=0;
  page:number=1;
 
  constructor(private restaurantService:RestaurantServiceService,private router:Router) { }
  ngOnInit(): void {
  }

  onSubmit(){
    this.getRestaurantByItem();
  }

  public getRestaurantByItem(){
    let item:string;
    item=this.item.itemName;
    this.restaurantService.getRestaurantByItem(item).subscribe(data=>{
      this.restaurants=data;
    },
    err=>{
      console.log(err.error);
    }
    );
    
  }

  public getRestaurantItems(restaurantName:string){
    this.restaurantname=restaurantName;
    this.restaurantService.setName(this.restaurantname);
    this.gotoItems();
   }
 
   gotoItems(){
     this.router.navigate(['userViewRestaurantItems']);
   }

   goToHome(){
    this.router.navigate(['user']);
  }
  logout(){
    alert("Logout Successfully");
    this.router.navigate(['login']);
    }


}
