import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-user-view-all-items',
  templateUrl: './user-view-all-items.component.html',
  styleUrls: ['./user-view-all-items.component.css']
})
export class UserViewAllItemsComponent implements OnInit {

  items!:Item[];
  totalRecords:number=0;
  page:number=1;
  term:any;
  count1:number=0;
  count2:number=0;
  count3:number=0;
  ngOnInit(): void {
    this.getItems();
  }
  constructor(private itemService:ItemServiceService,private router:Router) { }
 
  private getItems(){
    this.itemService.getAllItemsList().subscribe(data=>{
      this.items=data;
      this.totalRecords=data.length;
    },
    err=>{
      console.log(err.error);
    }
    );
  }


  getItemById(item:Item){ 
    this.itemService.setItem(item);
    this.gotoItem();
  }

  gotoRestaurant(){
    this.router.navigate(['viewRestaurantById']);
  }

  gotoItem(){
    this.router.navigate(['userViewItem']);
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
      this.itemService.sortItemsById().subscribe(data=>{
        this.items=data;
        this.totalRecords=data.length;
      },
      err=>{
        console.log(err.error);
      }
      );
    }
    else{
      this.itemService.sortItemsByIdDesc().subscribe(data=>{
        this.items=data;
        this.totalRecords=data.length;
      },
      err=>{
        console.log(err.error);
      }
      );
    }
    //this.count1++;
  }
  sortItemsByName(){
    //this.count2++;
    if(this.count2%2==0){
      this.itemService.sortItemsByName().subscribe(data=>{
        this.items=data;
        this.totalRecords=data.length;
      },
      err=>{
        console.log(err.error);
      }
      );
    }
    else{
      this.itemService.sortItemsByNameDesc().subscribe(data=>{
        this.items=data;
        this.totalRecords=data.length;
      },
      err=>{
        console.log(err.error);
      }
      );
    }
    this.count2++;
  }
  sortItemsByCost(){
    //this.count3++;
    if(this.count3%2==0){
      this.itemService.sortItemsByCost().subscribe(data=>{
        this.items=data;
        this.totalRecords=data.length;
      },
      err=>{
        console.log(err.error);
      }
      );
    }
    else{
      this.itemService.sortItemsByCostDesc().subscribe(data=>{
        this.items=data;
        this.totalRecords=data.length;
      },
      err=>{
        console.log(err.error);
      }
      );
    }
    this.count3++;
  }
  sortItemsByCategory(){
    //this.count2++;
    if(this.count2%2==0){
      this.itemService.sortItemsByCategory().subscribe(data=>{
        this.items=data;
        this.totalRecords=data.length;
      },
      err=>{
        console.log(err.error);
      }
      );
    }
    else{
      this.itemService.sortItemsByCategoryDesc().subscribe(data=>{
        this.items=data;
        this.totalRecords=data.length;
      },
      err=>{
        console.log(err.error);
      }
      );
    }
    this.count2++;
  }

  goToHome(){
    this.router.navigate(['user']);
  }
  logout(){
    alert("Logout Successfully");
      this.router.navigate(['login']);
    } 
}
