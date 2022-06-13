import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  restaurant:Restaurant=new Restaurant();
  submitted=false;
  totalRecords:number=0;
  page:number=1;
  constructor(private restaurantService:RestaurantServiceService,private router:Router){}

  ngOnInit(): void {
    this.submitted=false;
  }
  
  onSubmit(){
    //console.log(this.restaurant);
    this.doUpdateServer();
    //this.goToUpdateRestaurantAddress();
  }
  
  doUpdateServer(){
    this.restaurantService.setRestaurantValues(this.restaurant);
    this.router.navigate(['addRestaurantAddress']);
    /*this.restaurantService.doUpdateRestaurant(this.restaurant).subscribe
    (data=>{
      console.log(" Data Saved !!! "+data);
    },
    error =>{
      console.log(error);
  }
    );*/
}



goToHome(){
  this.router.navigate(['admin']);
}
logout(){
  alert("Logout Successfully");
    this.router.navigate(['login']);
  } 

}
