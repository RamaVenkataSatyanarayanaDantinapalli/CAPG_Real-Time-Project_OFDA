import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/user-restaurant/restaurant';
import { Item } from '../item';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-view-items-by-restaurant',
  templateUrl: './view-items-by-restaurant.component.html',
  styleUrls: ['./view-items-by-restaurant.component.css']
})
export class ViewItemsByRestaurantComponent implements OnInit {
  restaurant:Restaurant=new Restaurant();
  item:Item=new Item();
  itemId:number=-1;
  itemName:string="";
  category:string="";
  cost:number=-1;
  items!:Item[];
  totalRecords:number=0;
  page:number=1;
 
  constructor(private itemService:ItemServiceService,private router:Router) { }
  ngOnInit(): void {
  }
  onSubmit(){
    this.getItemByRestaurant();
  }
  public getItemByRestaurant(){
    let restaurant:string;
    restaurant=this.restaurant.restaurantName;
    let Items=[];
    this.itemService.getItemByRestaurant(restaurant).subscribe(data=>{
      Items=data;
      this.items=data;
    },
    err=>{
      console.log(err.error);
    }
    );
    if(Items.length==0){
      this.items=[];
    }
  }
  doRemoveItem(itemId:number){
    let confirm=prompt("Please Confirm to remove the Item","remove");
    if(confirm!=null){
      this.itemService.doDeleteItem(itemId);
    }
  }

  doUpdateItem(item:Item){
    this.itemService.setItem(item);
    this.gotoUpdateRestaurant();
  }

  getItemByID(itemId:number){ 
    this.itemService.setId(itemId);
    this.gotoItem();
  }

  gotoRestaurant(){
    this.router.navigate(['viewRestaurantById']);
  }

  gotoItem(){
    this.router.navigate(['viewItem']);
  }

  gotoUpdateRestaurant(){
    this.router.navigate(['updateItem'])
  }

  goToHome(){
    this.router.navigate(['admin']);
  }
  logout(){
    alert("Logout Successfully");
      this.router.navigate(['login']);
    } 

}
