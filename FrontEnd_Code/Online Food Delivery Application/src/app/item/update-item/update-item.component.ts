import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  item:Item=new Item();
  submitted=false;
  constructor(private itemService:ItemServiceService,private router:Router){}
  ngOnInit(): void {
    this.submitted=false;
    this.item=this.itemService.getItem();
  }
  
  onSubmit(){
    console.log(this.item);
    this.doUpdateServer();
    this.router.navigate(['viewAllItems']);
  }
  
  doUpdateServer(){
    this.itemService.doUpdateItem(this.item).subscribe
    (data=>{
      console.log(" Data Updated !!! "+data);
    },
    error =>{
      console.log(error);
  }
    );
}
goToHome(){
  this.router.navigate(['admin']);
}
logout(){
  alert("Logout Successfully");
    this.router.navigate(['login']);
  } 
}
 