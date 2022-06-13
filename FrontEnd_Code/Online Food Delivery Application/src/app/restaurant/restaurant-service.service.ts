import { Injectable ,EventEmitter} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import { Restaurant } from './restaurant';
import { Item } from '../item/item';
import { Address } from '../address';
@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {
  private endpoint='http://localhost:8084/app/';

  
  private restaurantName:string="";
  private restaurantId:number=-1;
  managerName:string="";
  contactNumber:number=-1;
  address: Address = new Address;
  
  items:Item[]=[];
  item:Item=new Item();
  restaurant:Restaurant=new Restaurant();

  setRestaurantValues(Restaurant:Restaurant){
    this.restaurant.restaurantId=Restaurant.restaurantId;
    this.restaurant.restaurantName=Restaurant.restaurantName;
    this.restaurant.managerName=Restaurant.managerName;
    this.restaurant.contactNumber=Restaurant.contactNumber;
  }

  setRestaurantAddress(address:Address){
    this.restaurant.address=address;
  }


  setRestaurantItem(item:Item){
    //this.item=item;
   // let foundItem=this.items.find(Item=>Item.itemId==item.itemId);
    this.items.push(item);
    //this.restaurant.itemList=this.items;
    
    //this.restaurant.itemList.push(item);
  }

  getRestaurantItems(){
    return this.items;
  }
  setRestaurantItems(items:Item[]){
    this.restaurant.itemList=items;
  }
  setRestItems(items:Item[]){
    this.items=items;
  }
  getRestItems(){
    return this.items;
  }
  setRestaurant(restaurant:Restaurant){
    this.restaurant=restaurant;
  }
  getRestaurant(){
    return this.restaurant;
  }
  setItem(item:Item){
    this.item=item;
  }
  getItem(){
    return this.item;
  }
   setName(resName:string){
     this.restaurantName=resName;
   }
   setId(resId:number){
     this.restaurantId=resId;
   }
   setUpdateValues(restaurantId:number,restaurantName:string,managerName:string,contactNumber:number,address:Address){
    this.restaurantId=restaurantId;
    this.restaurantName=restaurantName;
    this.managerName=managerName;
    this.contactNumber=contactNumber;
    this.address=address;
  }
  setItems(items:Item[]){
    this.items=items;
  }
  getItems(){
    return this.items;
  }
  setRestaurantUpdateValues(Restaurant:Restaurant){
    this.restaurant.restaurantId=Restaurant.restaurantId;
    this.restaurant.restaurantName=Restaurant.restaurantName;
    this.restaurant.managerName=Restaurant.managerName;
    this.restaurant.contactNumber=Restaurant.contactNumber;
    this.restaurant.address=Restaurant.address;
    this.restaurant.itemList=Restaurant.itemList;
  }
   getName():string{
     return this.restaurantName;
   }
   getId():number{
    return this.restaurantId;
  }
  getRestaurantUpdateValues(){
    return this.restaurant;
  }
  //configUrl='asserts/caonfig.json';

  Item:Item=new Item();
  private itemName:string="";
  private itemId:number=-1;
 private category:string="";
  private cost:number=-1;
 
  
  getUpdateValues(){
    return this.restaurantId,this.restaurantName,this.managerName,this.contactNumber,this.address;
  }
  //configUrl='asserts/caonfig.json';

  
 
 
  //configUrl='asserts/caonfig.json';
  setItemName(itemName:string){
    this.itemName=itemName;
  }
  setItemId(itemId:number){
    this.itemId=itemId;
  }
  setItemUpdateValues(itemId:number,itemName:string,category:string,cost:number){
   this.itemId=itemId;
   this.itemName=itemName;
   this.category=category;
   this.cost=cost;
 }
  getItemName():string{
    return this.itemName;
  }
  getItemId():number{
   return this.itemId; 
 }
 getItemUpdateValues(){
   return this.itemId,this.itemName,this.itemName,this.category,this.cost;
 }
  
  private getAllRestaurants_endpoint=this.endpoint+'viewallrestaurants';
  private getRestaurantItems_endpoint=this.endpoint+'viewitemsbyrestaurant';
  private getRestaurantById_endpoint=this.endpoint+'viewrestaurantbyid';
  private getRestaurantByName_endpoint=this.endpoint+'viewrestaurantbyname';
  private getRestaurantByPincode_endpoint=this.endpoint+'viewrestaurantsbypincode';
  private getRestaurantByCity_endpoint=this.endpoint+'viewrestaurantsbycity';
  private getRestaurantByItem_endpoint=this.endpoint+'viewrestaurantsbyitemname';

  private addRestaurant_endpoint=this.endpoint+'addrestaurant';
  private removeRestaurant_endpoint=this.endpoint+'removerestaurant';
  private updateRestaurant_endpoint=this.endpoint+'updaterestaurant';

  private removeItem_endpoint=this.endpoint+'removeitem';
  private updateItem_endpoint=this.endpoint+'updateitem';

 
   constructor(private http:HttpClient) { }
 
  

   getAllRestaurantsList():Observable<Restaurant[]>
   {
     console.log('Restaurant Service -Get Restaurants Called ');
     let list=this.http.get<Restaurant[]>(this.getAllRestaurants_endpoint);
     return list;     
   }

   getAllRestaurantItemsList(restaurantName:string):Observable<Item[]>
   {
     console.log('Restaurant Service -Get Restaurant Items Called');
     let list=this.http.get<Item[]>(this.getRestaurantItems_endpoint+'/'+restaurantName);
     return list;     
   }

   getRestaurantById(restaurantId:number):Observable<Restaurant[]>
   {
     console.log('Restaurant Service -Get Restaurant Items Called');
     let list=this.http.get<Restaurant[]>(this.getRestaurantById_endpoint+'/'+restaurantId);
     return list;     
   }
   getRestaurantByName(restaurantName:string):Observable<Restaurant[]>
   {
     console.log('Restaurant Service -Get Restaurant Items Called');
     let list=this.http.get<Restaurant[]>(this.getRestaurantByName_endpoint+'/'+restaurantName);
     return list;     
   }
   getRestaurantByPincode(pincode:number):Observable<Restaurant[]>
   {
     console.log('Restaurant Service -Get Restaurant Items Called');
     let list=this.http.get<Restaurant[]>(this.getRestaurantByPincode_endpoint+'/'+pincode);
     return list;     
   }
   getRestaurantByCity(city:string):Observable<Restaurant[]>
   {
     console.log('Restaurant Service -Get Restaurant Items Called');
     let list=this.http.get<Restaurant[]>(this.getRestaurantByCity_endpoint+'/'+city);
     return list;     
   }
   getRestaurantByItem(itemName:string):Observable<Restaurant[]>
   {
     console.log('Restaurant Service -Get Restaurant Items Called');
     let list=this.http.get<Restaurant[]>(this.getRestaurantByItem_endpoint+'/'+itemName);
     return list;     
   }

   doAddRestaurant(restaurant:Restaurant){
    console.log('Restaurant Service -Add Restaurant Called ');
    let list=this.http.post<Restaurant[]>(this.addRestaurant_endpoint,restaurant);
    alert("Restaurant Added Successfully");
    return list; 
 }

  doDeleteRestaurant(restaurantId:number){
    console.log('Restaurant Service -Remove Restaurant Called ');
     let list=this.http.get<Restaurant[]>(this.removeRestaurant_endpoint+"/"+restaurantId);
     alert("Restaurant Removed Successfully");
     return list; 
  }
  doUpdateRestaurant(restaurant:Restaurant):Observable<Object>{
    console.log('Restaurant Service - Update Restaurant Called');
    let opt=this.http.put<Restaurant>(this.updateRestaurant_endpoint,restaurant);
    if(opt){
      alert("Restaurant Updated Successfully");
    }
    else{
      alert("Restaurant Not Updated!");
    }
    return opt;
  }

  doDeleteItem(itemId:number){
    console.log('Restaurant Service -Remove Restaurant Called ');
     let list=this.http.get<Item[]>(this.removeItem_endpoint+"/"+itemId);
     alert("Item Removed Successfully");
     return list; 
  }
  doUpdateItem(item:Item):Observable<Object>{
    console.log('Restaurant Service - Update Restaurant Called');
    let opt=this.http.put<Item>(this.updateItem_endpoint,item);
    if(opt){
      alert("Item Updated Successfully");
    }
    else{
      alert("Item Not Updated!");
    }
    return opt;
  }

}
