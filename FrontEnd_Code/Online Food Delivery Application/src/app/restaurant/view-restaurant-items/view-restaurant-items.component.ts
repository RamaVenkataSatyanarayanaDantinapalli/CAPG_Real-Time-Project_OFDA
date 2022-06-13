import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/item/item';
import { RestaurantServiceService } from '../restaurant-service.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-view-restaurant-items',
  templateUrl: './view-restaurant-items.component.html',
  styleUrls: ['./view-restaurant-items.component.css']
})
export class ViewRestaurantItemsComponent implements OnInit {
  restaurantName:string="";
   
  items:Item[]=[];
  totalRecords:number=0;
  page:number=1;
 
  count1:number=0;
  count2:number=0;
  count3:number=0;
  count4:number=0;
  
  term:any;
  constructor(private itemService:RestaurantServiceService,private router:Router) { }
  ngOnInit(): void {
   this.getRestaurantItems();
  }
  public getRestaurantItems(){
    let restName:string;
    restName=this.itemService.getName();
    this.itemService.getAllRestaurantItemsList(restName).subscribe(data=>{
      this.items=data;
    },
    err=>{
      console.log(err.error);
    }
    );
    
  }
  doRemoveItem(itemId:number){
    let confirm=prompt("Please Confirm to remove the Item","remove");
    if(confirm!=null){
      this.itemService.doDeleteItem(itemId);
    }
  }

  doUpdateItem(itemId:number,itemName:string,category:string,cost:number){
    this.itemService.setItemUpdateValues(itemId,itemName,category,cost);
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

  sortItemsByID(){
    this.items.sort(function(a,b){
      return  a.itemId-b.itemId;
     });
  }
sortItemsById(){
 
  this.count1++;
  if(this.count1%2==0){
    this.items.sort(function(a,b){
      return  a.itemId-b.itemId;
     });
  }
  else{
    this.items.sort(function(a,b){
      return  b.itemId-a.itemId;
     });
  }
  //this.count1++; 
}
sortItemsByName(){
  
  this.count2++;
  if(this.count2%2==0){ 
    this.items.sort(function(a,b){
      let x=a.itemName.toLocaleLowerCase();
      let y=b.itemName.toLocaleLowerCase();
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
    this.items.sort(function(a,b){
      let x=a.itemName.toLocaleLowerCase();
      let y=b.itemName.toLocaleLowerCase();
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

sortItemsByCategory(){
  this.count3++;
  if(this.count3%2==0){
    this.items.sort(function(a,b){
      let x=a.category.toLocaleLowerCase();
      let y=b.category.toLocaleLowerCase();
      if(x<y){
        return -1;
      }
      if(x>y){
        return 1;
      }
      return 0;
    });
}
  else{
    this.items.sort(function(a,b){
      let x=a.category.toLocaleLowerCase();
      let y=b.category.toLocaleLowerCase();
      if(x>y){
        return -1;
      }
      if(x<y){
        return 1;
      }
      return 0;
    });
  }
  //this.count3++;
}

sortItemsByCost(){
  this.count4++;
  if(this.count4%2==0){
    this.items.sort(function(a,b){
      return  b.cost-a.cost;
     });
  }
  else{
    this.items.sort(function(a,b){
      return  a.cost-b.cost;
     });
  }
  //this.count4++;
}

  goToHome(){
    this.router.navigate(['admin']);
  }
  logout(){
    alert("Logout Successfully");
      this.router.navigate(['login']);
    } 
  
}
