import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-user-view-item',
  templateUrl: './user-view-item.component.html',
  styleUrls: ['./user-view-item.component.css']
})
export class UserViewItemComponent implements OnInit {

  itemId:number=-1;
  itemName:string="";
  category:string="";
  cost:number=-1;
  items:Item[]=[];
  totalRecords:number=0;
  page:number=1;
  item:Item=new Item();
  constructor(private itemService:ItemServiceService,private router:Router) { }
  ngOnInit(): void {
   this.item=this.itemService.getItem();
   this.items.push(this.item);
  }
  
  goToHome(){
    this.router.navigate(['user']);
  }
  logout(){
    alert("Logout Successfully");
      this.router.navigate(['login']);
    } 



}
