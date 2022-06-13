import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item:Item=new Item();
  constructor(private itemService:ItemServiceService,private router:Router){}
  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log(this.item);
    this.doUpdateServer();
    this.router.navigate(['viewAllItems']);
    this.router.navigate(['viewAllItems']);
  }
  
  doUpdateServer(){
    this.itemService.doAddItem(this.item).subscribe
    (data=>{
      console.log(" Data Added !!! "+data);
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
