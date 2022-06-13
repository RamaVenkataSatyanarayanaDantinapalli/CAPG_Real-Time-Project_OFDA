import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/address';
import { Item } from 'src/app/item/item';
import { Restaurant } from '../restaurant';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-update-restaurant-address',
  templateUrl: './update-restaurant-address.component.html',
  styleUrls: ['./update-restaurant-address.component.css']
})
export class UpdateRestaurantAddressComponent implements OnInit {

  restaurant:Restaurant=new Restaurant();
  address:Address=new Address();
  submitted=false;
  totalRecords:number=0;
  page:number=1;
  items:Item[]=[];
  constructor(private restaurantService:RestaurantServiceService,private router:Router){}

  ngOnInit(): void {
    this.submitted=false;
    this.address=this.restaurantService.getRestaurant().address;
  }
  
  onSubmit(){
    console.log(this.restaurant);
    this.doUpdateServer();
    
    this.router.navigate(['viewAllRestaurants']);
  }
  
  doUpdateServer(){
    this.restaurantService.setRestaurantAddress(this.address);
    this.restaurant=this.restaurantService.getRestaurant();
    this.restaurant.itemList=this.items;
    this.restaurantService.doUpdateRestaurant(this.restaurant).subscribe
    (data=>{
      console.log(" Data Saved !!! "+data);
    },
    error =>{
      console.log(error);
  }
    );
}

goToHome(){
  this.router.navigate(['admin']);
}
logout(){
  alert("Logout Successfully");
    this.router.navigate(['login']);
  } 


}
