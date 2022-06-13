import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item/item';
import { CartServiceService } from './cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  today=new Date();
  items!:Item[];
  totalRecords:number=0;
  page:number=1;
  count1:number=0; 
  count2:number=0;
  count3:number=0;
  count4:number=0;
  term:any;
  totalAmount:number=0;
  filterData:any;
  ngOnInit(): void {
    //this.getItems();
    this.items=this.cartService.getCart().items;
    for(let item of this.items){
      this.totalAmount+=item.cost;
    }
  }
  constructor(private cartService:CartServiceService,private router:Router) { }
 
 /* private getItems(){
    this.itemService.getAllItemsList().subscribe(data=>{
      this.items=data;
      this.totalRecords=data.length;
    },
    err=>{
      console.log(err.error);
    }
    );
  }*/

  doEmptyCart(){
    this.items=[];
    this.totalAmount=0;
  }
  doRemoveItem(itemId:number){
    let confirm=prompt("Please Confirm to remove the Item","remove");
    if(confirm!=null){
      //this.cartService.doDeleteItem(itemId);
    }
  }

  doUpdateItem(item:Item){
    //this.cartService.setcart(item);
    this.gotoUpdateRestaurant();
  }

  getItemById(itemId:number){ 
    //this.itemService.setItem(item);
    //this.cartService.setId(itemId);
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

  goToViewAllItems(){
    this.router.navigate(['viewAllItems']);
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
