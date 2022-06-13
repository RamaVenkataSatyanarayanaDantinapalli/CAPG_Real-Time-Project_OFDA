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
   getName():string{
     return this.restaurantName;
   }
   getId():number{
    return this.restaurantId;
  }
  getUpdateValues(){
    return this.restaurantId,this.restaurantName,this.managerName,this.contactNumber,this.address;
  }
  //configUrl='asserts/caonfig.json';

  
  
  private getAllRestaurants_endpoint=this.endpoint+'viewallrestaurants';
  private getRestaurantItems_endpoint=this.endpoint+'viewitemsbyrestaurant';
  private getRestaurantById_endpoint=this.endpoint+'viewrestaurantbyid';
  private getRestaurantByName_endpoint=this.endpoint+'viewrestaurantbyname';
  private getRestaurantByPincode_endpoint=this.endpoint+'viewrestaurantsbypincode';
  private getRestaurantByCity_endpoint=this.endpoint+'viewrestaurantsbycity';
  private getRestaurantByItem_endpoint=this.endpoint+'viewrestaurantsbyitemname';
  private removeRestaurant_endpoint=this.endpoint+'removerestaurant';
  private updateRestaurant_endpoint=this.endpoint+'updaterestaurant';

 
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

}
