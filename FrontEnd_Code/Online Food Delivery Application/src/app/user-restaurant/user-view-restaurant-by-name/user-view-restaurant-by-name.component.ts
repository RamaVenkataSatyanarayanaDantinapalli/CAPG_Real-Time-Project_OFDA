import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-user-view-restaurant-by-name',
  templateUrl: './user-view-restaurant-by-name.component.html',
  styleUrls: ['./user-view-restaurant-by-name.component.css']
})
export class UserViewRestaurantByNameComponent implements OnInit {

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
    this.getRestaurantByName();
  }

  public getRestaurantByName(){
    let restName:string;
    restName=this.restaurant.restaurantName;
    this.restaurantService.getRestaurantByName(restName).subscribe(data=>{
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
