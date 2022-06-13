import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/address';
import { Item } from 'src/app/item/item';
import { Restaurant } from '../restaurant';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-view-restaurant-by-id',
  templateUrl: './view-restaurant-by-id.component.html',
  styleUrls: ['./view-restaurant-by-id.component.css']
})
export class ViewRestaurantByIdComponent implements OnInit {
  restaurant:Restaurant=new Restaurant();
  restaurantId:number=-1;
  restaurantname:string="";
  restaurants:Restaurant[]=[];
  totalRecords:number=0;
  page:number=1;
 
  constructor(private restaurantService:RestaurantServiceService,private router:Router) { }
  ngOnInit(): void {
  }

  onSubmit(){
    this.getRestaurantById();
  }

  public getRestaurantById(){
    let restId:number;
    restId=this.restaurant.restaurantId;
    let Restaurants=[];
    this.restaurantService.getRestaurantById(restId).subscribe(data=>{
      Restaurants=data;
      this.restaurants=data;
    },
    err=>{
      console.log(err.error);
    }
    );
    if(Restaurants.length==0){
      this.restaurants=[];
    }
  }

  public getRestaurantItems(restaurantName:string){
    this.restaurantname=restaurantName;
    this.restaurantService.setName(this.restaurantname);
    this.gotoItems();
   }
 
   gotoItems(){
     this.router.navigate(['viewRestaurantItems']);
   }

   doRemoveRestaurant(restaurantId:number){
    let confirm=prompt("Please Confirm to remove the Restaurant","remove");
    if(confirm!=null){
      this.restaurantService.doDeleteRestaurant(restaurantId);
    }
  }

  doUpdateRestaurant(restaurant:Restaurant){
    this.restaurantService.setRestaurant(restaurant);
    this.gotoUpdateItem();
  }

  getRestaurantByID(restaurantId:number){
    this.restaurantService.setId(restaurantId);
    this.gotoRestaurant();
  }

  gotoRestaurant(){
    this.router.navigate(['viewRestaurant']);
  }

  gotoUpdateItem(){
    this.router.navigate(['updateRestaurant'])
  }

   goToHome(){
    this.router.navigate(['admin']);
  }
  logout(){
    alert("Logout Successfully");
    this.router.navigate(['login']);
    } 
  
}
