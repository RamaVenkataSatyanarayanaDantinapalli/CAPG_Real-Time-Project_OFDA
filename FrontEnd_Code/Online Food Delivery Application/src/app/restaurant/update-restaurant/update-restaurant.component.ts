import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  restaurant:Restaurant=new Restaurant();
  submitted=false;
  totalRecords:number=0;
  page:number=1;
  constructor(private restaurantService:RestaurantServiceService,private router:Router){}

  

  ngOnInit(): void {
    this.submitted=false;
    this.restaurant=this.restaurantService.getRestaurant();
  }
  
  onSubmit(){
    //console.log(this.restaurant);
    this.doUpdateServer();
    //this.goToUpdateRestaurantAddress(); 
  }
  

  doUpdateServer(){
    this.restaurantService.setRestaurantValues(this.restaurant);
    this.router.navigate(['updateRestaurantAddress']);
}

goToUpdateRestaurantAddress()
{
  this.router.navigate(['updateRestaurantAddress']);
}

goToHome(){
  this.router.navigate(['admin']);
}
logout(){
  alert("Logout Successfully");
    this.router.navigate(['login']);
  } 


  

}
