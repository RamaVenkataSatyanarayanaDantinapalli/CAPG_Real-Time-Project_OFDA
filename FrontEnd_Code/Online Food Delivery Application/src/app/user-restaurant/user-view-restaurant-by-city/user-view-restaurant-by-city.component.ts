import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/address';
import { Restaurant } from '../restaurant';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-user-view-restaurant-by-city',
  templateUrl: './user-view-restaurant-by-city.component.html',
  styleUrls: ['./user-view-restaurant-by-city.component.css']
})
export class UserViewRestaurantByCityComponent implements OnInit {

  restaurant:Restaurant=new Restaurant();
  address:Address=new Address();
  restaurantId:number=-1;
  restaurantname:string="";
  restaurants:Restaurant[]=[];
  totalRecords:number=0;
  page:number=1;
 
  constructor(private restaurantService:RestaurantServiceService,private router:Router) { }
  ngOnInit(): void {
  }

  onSubmit(){
    this.getRestaurantByCity();
  }

  public getRestaurantByCity(){
    let city:string;
    city=this.address.city;
    this.restaurantService.getRestaurantByCity(city).subscribe(data=>{
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
