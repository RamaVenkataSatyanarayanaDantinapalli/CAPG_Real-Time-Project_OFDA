import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/user-restaurant/restaurant';
import { Item } from '../item';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-user-view-items-by-restaurant',
  templateUrl: './user-view-items-by-restaurant.component.html',
  styleUrls: ['./user-view-items-by-restaurant.component.css']
})
export class UserViewItemsByRestaurantComponent implements OnInit {
  restaurant:Restaurant=new Restaurant();
  item:Item=new Item();
  itemId:number=-1;
  itemName:string="";
  category:string="";
  cost:number=-1;
  items!:Item[];
  totalRecords:number=0;
  page:number=1;
 
  constructor(private itemService:ItemServiceService,private router:Router) { }
  ngOnInit(): void {
  }
  onSubmit(){
    this.getItemByRestaurant();
  }
  public getItemByRestaurant(){
    let restaurant:string;
    restaurant=this.restaurant.restaurantName;
    this.itemService.getItemByRestaurant(restaurant).subscribe(data=>{
      this.items=data;
    },
    err=>{
      console.log(err.error);
    }
    );
    
  }
  goToHome(){
    this.router.navigate(['user']);
  }
  logout(){
    alert("Logout Successfully");
      this.router.navigate(['login']);
    } 


}
