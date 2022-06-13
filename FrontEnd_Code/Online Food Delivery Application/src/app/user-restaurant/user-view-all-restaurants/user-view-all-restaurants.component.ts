import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/user-item/item';
import { Restaurant } from '../restaurant';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-user-view-all-restaurants',
  templateUrl: './user-view-all-restaurants.component.html',
  styleUrls: ['./user-view-all-restaurants.component.css']
})
export class UserViewAllRestaurantsComponent implements OnInit {

  restaurantname:string="";
  restaurants!:Restaurant[];
  items!:Item[];
  totalRecords:number=0;
  page:number=1;
  term:any;
  count1:number=0;
  count2:number=0;
  count3:number=0;
  count4:number=0;
  count5:number=0;
  ngOnInit(): void {
    this.getRestaurants();
  }
  constructor(private restaurantService:RestaurantServiceService,private router:Router) { }


  private getRestaurants(){
    this.restaurantService.getAllRestaurantsList().subscribe(data=>{
      this.restaurants=data;
      this.totalRecords=data.length;
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

  getRestaurantById(restaurantId:number){
    this.restaurantService.setId(restaurantId);
    this.gotoRestaurant();
  }

  gotoRestaurant(){
    this.router.navigate(['userViewRestaurant']);
  }
  sortRestaurantsById(){
   
    this.count1++;
    if(this.count1%2==0){
      this.restaurants.sort(function(a,b){
        return  a.restaurantId-b.restaurantId;
       });
    }
    else{
      this.restaurants.sort(function(a,b){
        return  b.restaurantId-a.restaurantId;
       });
    }
    //this.count1++;
  }

  sortRestaurantsByName(){
    
    this.count2++;
    if(this.count2%2==0){ 
      this.restaurants.sort(function(a,b){
        let x=a.restaurantName.toLocaleLowerCase();
        let y=b.restaurantName.toLocaleLowerCase();
        if(x>y){
          return -1;
        }
        if(x<y){
          return 1;
        }
        return 0;
      });
  }
    else{
      this.restaurants.sort(function(a,b){
        let x=a.restaurantName.toLocaleLowerCase();
        let y=b.restaurantName.toLocaleLowerCase();
        if(x<y){
          return -1;
        }
        if(x>y){
          return 1;
        }
        return 0;
      });
    }
    //this.count2++;
  }

  sortRestaurantsByCity(){
    
    this.count3++;
    if(this.count3%2==0){ 
      this.restaurants.sort(function(a,b){
        let x=a.address.city.toLocaleLowerCase();
        let y=b.address.city.toLocaleLowerCase();
        if(x>y){
          return -1;
        }
        if(x<y){
          return 1;
        }
        return 0;
      });
  }
    else{
      this.restaurants.sort(function(a,b){
        let x=a.address.city.toLocaleLowerCase();
        let y=b.address.city.toLocaleLowerCase();
        if(x<y){
          return -1;
        }
        if(x>y){
          return 1;
        }
        return 0;
      });
    }
    //this.count2++;
  }

  sortRestaurantsByManagerName(){
    
    this.count4++;
    if(this.count4%2==0){ 
      this.restaurants.sort(function(a,b){
        let x=a.managerName.toLocaleLowerCase();
        let y=b.managerName.toLocaleLowerCase();
        if(x>y){
          return -1;
        }
        if(x<y){
          return 1;
        }
        return 0;
      });
  }
    else{
      this.restaurants.sort(function(a,b){
        let x=a.managerName.toLocaleLowerCase();
        let y=b.managerName.toLocaleLowerCase();
        if(x<y){
          return -1;
        }
        if(x>y){
          return 1;
        }
        return 0;
      });
    }
    //this.count2++;
  }
  sortRestaurantsByContact(){
   
    this.count5++;
    if(this.count5%2==0){
      this.restaurants.sort(function(a,b){
        return  a.contactNumber-b.contactNumber;
       }); 
    }
    else{
      this.restaurants.sort(function(a,b){
        return  b.contactNumber-a.contactNumber;
       });
    }
    //this.count5++;
  }
  goToHome(){
    this.router.navigate(['user']);
  }
  logout(){
    alert("Logout Successfully");
      this.router.navigate(['login']);
    }

}
