import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToRestaurant(menu1:string){
    console.log(menu1);
    if((menu1.localeCompare("Add Restaurant"))==0){
      this.router.navigate(['addRestaurant']);
    }
    else if((menu1.localeCompare("View All Restaurants"))==0){
      this.router.navigate(['viewAllRestaurants']);
    }
    else if((menu1.localeCompare("View Restaurant By ID"))==0){
      this.router.navigate(['viewRestaurantById']);
    }
    else if((menu1.localeCompare("View Restaurants By Name"))==0){
      this.router.navigate(['viewRestaurantByName']);
    }
    else if((menu1.localeCompare("View Restaurants By Pincode"))==0){
      this.router.navigate(['viewRestaurantByPincode']);
    }
    else if((menu1.localeCompare("View Restaurants By City"))==0){
      this.router.navigate(['viewRestaurantByCity']);
    }
    else if((menu1.localeCompare("View Restaurants By Item"))==0){
      this.router.navigate(['viewRestaurantByItem']);
    }
  }

  navigateToItem(menu2:string){
    console.log(menu2);
    if((menu2.localeCompare("Add Item"))==0){
      this.router.navigate(['addItem']);
    }
    else if((menu2.localeCompare("View All Items"))==0){
      this.router.navigate(['viewAllItems']);
    }
    else if((menu2.localeCompare("View Item By ID"))==0){
      this.router.navigate(['viewItemById']);
    }
    else if((menu2.localeCompare("View Items By Name"))==0){
      this.router.navigate(['viewItemsByName']);
    }
    else if((menu2.localeCompare("View Items By Category"))==0){
      this.router.navigate(['viewItemsByCategory']);
    }
    else if((menu2.localeCompare("View Items By Restaurant"))==0){
      this.router.navigate(['viewItemsByRestaurant']);
    }
  }
  navigateToOrder(menu3:string){
    console.log(menu3);
    if((menu3.localeCompare("Add Order"))==0){
      this.router.navigate(['addOrder']);
    }
    else if((menu3.localeCompare("View All Orders"))==0){
      this.router.navigate(['viewAllOrders']);
    }
  }
  navigateToCustomer(menu4:string){
    console.log(menu4);
    if((menu4.localeCompare("Add Customer"))==0){
      this.router.navigate(['addCustomer']);
    }
    else if((menu4.localeCompare("View All Customers"))==0){
      this.router.navigate(['viewAllCustomers']);
    }
  }
  logout(){
    alert("Logout Successfully");
      this.router.navigate(['login']);
    }

}
