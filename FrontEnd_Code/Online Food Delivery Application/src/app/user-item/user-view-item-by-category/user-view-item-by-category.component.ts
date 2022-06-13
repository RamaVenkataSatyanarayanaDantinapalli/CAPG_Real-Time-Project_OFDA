import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-user-view-item-by-category',
  templateUrl: './user-view-item-by-category.component.html',
  styleUrls: ['./user-view-item-by-category.component.css']
})
export class UserViewItemByCategoryComponent implements OnInit {

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
    this.getItemByCategory();
  }
  public getItemByCategory(){
    let category:string;
    category=this.item.category;
    this.itemService.getItemByCategory(category).subscribe(data=>{
      this.items=data;
    },
    err=>{
      console.log(err.error);
    }
    );
    
  }
  goToHome(){
    this.router.navigate(['user']);
  }
  logout(){
    alert("Logout Successfully");
      this.router.navigate(['login']);
    } 


}
