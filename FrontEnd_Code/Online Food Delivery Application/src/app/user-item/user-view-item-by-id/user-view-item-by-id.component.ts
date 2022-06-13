import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-user-view-item-by-id',
  templateUrl: './user-view-item-by-id.component.html',
  styleUrls: ['./user-view-item-by-id.component.css']
})
export class UserViewItemByIdComponent implements OnInit {

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
    this.getItemById();
  }
  public getItemById(){
    let itemId:number;
    itemId=this.item.itemId;
    this.itemService.getItemById(itemId).subscribe(data=>{
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
