import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToRestaurant(menu1:string){
    console.log(menu1);
    if((menu1.localeCompare("View All Restaurants"))==0){
      this.router.navigate(['userViewAllRestaurants']);
    }
    else if((menu1.localeCompare("View Restaurant By ID"))==0){
      this.router.navigate(['userViewRestaurantById']);
    }
    else if((menu1.localeCompare("View Restaurants By Name"))==0){
      this.router.navigate(['userViewRestaurantByName']);
    }
    else if((menu1.localeCompare("View Restaurants By Pincode"))==0){
      this.router.navigate(['userViewRestaurantByPincode']);
    }
    else if((menu1.localeCompare("View Restaurants By City"))==0){
      this.router.navigate(['userViewRestaurantByCity']);
    }
    else if((menu1.localeCompare("View Restaurants By Item Name"))==0){
      this.router.navigate(['userViewRestaurantByItem']);
    }
  }

  navigateToItem(menu2:string){
    console.log(menu2);
    if((menu2.localeCompare("View All Items"))==0){
      this.router.navigate(['UserViewAllItems']);
    }
    else if((menu2.localeCompare("View Item By ID"))==0){
      this.router.navigate(['userViewItemById']);
    }
    else if((menu2.localeCompare("View Items By Name"))==0){
      this.router.navigate(['userViewItemsByName']);
    }
    else if((menu2.localeCompare("View Items By Category"))==0){
      this.router.navigate(['userViewItemsByCategory']);
    }
    else if((menu2.localeCompare("View Items By Restaurant"))==0){
      this.router.navigate(['userViewItemsByRestaurant']); 
    }
  }
  logout(){
    alert("Logout Successfully");
      this.router.navigate(['login']);
    }
}
