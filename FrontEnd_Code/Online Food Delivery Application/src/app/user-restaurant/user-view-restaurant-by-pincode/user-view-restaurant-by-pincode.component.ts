import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/address';
import { Restaurant } from '../restaurant';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-user-view-restaurant-by-pincode',
  templateUrl: './user-view-restaurant-by-pincode.component.html',
  styleUrls: ['./user-view-restaurant-by-pincode.component.css']
})
export class UserViewRestaurantByPincodeComponent implements OnInit {

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
    this.getRestaurantByPincode();
  }

  public getRestaurantByPincode(){
    let pincode:number;
    pincode=this.address.pincode;
    this.restaurantService.getRestaurantByPincode(pincode).subscribe(data=>{
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
