import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/address';
import { Restaurant } from '../restaurant';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-view-restaurant-by-city',
  templateUrl: './view-restaurant-by-city.component.html',
  styleUrls: ['./view-restaurant-by-city.component.css']
})
export class ViewRestaurantByCityComponent implements OnInit {

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
    let Restaurants=[];
    this.restaurantService.getRestaurantByCity(city).subscribe(data=>{
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
