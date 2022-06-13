import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import { Item } from './item';
import {NgxPaginationModule} from 'ngx-pagination'
@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  private endpoint='http://localhost:8084/app/';

  private itemName:string="";
  private itemId:number=-1;
 private category:string="";
  private cost:number=-1;
 
  item:Item=new Item();
  //configUrl='asserts/caonfig.json';
  setName(itemName:string){
    this.itemName=itemName;
  }
  setId(itemId:number){
    this.itemId=itemId;
  }
  setUpdateValues(itemId:number,itemName:string,category:string,cost:number){
   this.itemId=itemId;
   this.itemName=itemName;
   this.category=category;
   this.cost=cost;
 }
 setItem(item:Item){
   this.item=item;
 }
 getItem(){
   return this.item;
 }
  getName():string{
    return this.itemName;
  }
  getId():number{
   return this.itemId; 
 }
 getUpdateValues(){
   return this.itemId,this.itemName,this.itemName,this.category,this.cost;
 }
  
  
  private getAllItems_endpoint=this.endpoint+'viewallitems';
  private getItemById_endpoint=this.endpoint+'viewitembyid';
  private getItemByName_endpoint=this.endpoint+'viewitemsbyname';
  private getItemByCategory_endpoint=this.endpoint+'viewitemsbycategory';
  private getItemByRestaurant_endpoint=this.endpoint+'viewitemsbyrestaurant';
  private sortItemsById_endpoint=this.endpoint+'sortitemsbyid';
  private sortItemsByCost_endpoint=this.endpoint+'sortitemsbycost';
  private sortItemsByName_endpoint=this.endpoint+'sortitemsbyname';
  private sortItemsByCategory_endpoint=this.endpoint+'sortitemsbycategory';
  private sortItemsByIdDesc_endpoint=this.endpoint+'sortitemsbyiddesc';
  private sortItemsByCostDesc_endpoint=this.endpoint+'sortitemsbycostdesc';
  private sortItemsByNameDesc_endpoint=this.endpoint+'sortitemsbynamedesc';
  private sortItemsByCategoryDesc_endpoint=this.endpoint+'sortitemsbycategorydesc';

   constructor(private http:HttpClient) { }
 
  

   getAllItemsList():Observable<Item[]>
   {
     console.log('Item Service -Get Items Called ');
     let list=this.http.get<Item[]>(this.getAllItems_endpoint);
     return list;     
   }

   getItemById(itemId:number):Observable<Item[]>
   {
     console.log('Item Service -Get Item Called');
     let list=this.http.get<Item[]>(this.getItemById_endpoint+'/'+itemId);
     return list;     
   }


   getItemByName(itemName:string):Observable<Item[]>
   {
     console.log('Item Service -Get Item Called');
     let list=this.http.get<Item[]>(this.getItemByName_endpoint+'/'+itemName);
     return list;     
   }

   getItemByRestaurant(restaurant:string):Observable<Item[]>
   {
     console.log('Item Service -Get Item Called');
     let list=this.http.get<Item[]>(this.getItemByRestaurant_endpoint+'/'+restaurant);
     return list;     
   }

   getItemByCategory(category:string):Observable<Item[]>
   {
     console.log('Item Service -Get Item Called');
     let list=this.http.get<Item[]>(this.getItemByCategory_endpoint+'/'+category);
     return list;     
   }

   sortItemsById():Observable<Item[]>
   {
     console.log('Item Service -Get Items Called');
     let list=this.http.get<Item[]>(this.sortItemsById_endpoint);
     return list;     
   }
   sortItemsByIdDesc():Observable<Item[]>
   {
     console.log('Item Service -Get Items Called ');
     let list=this.http.get<Item[]>(this.sortItemsByIdDesc_endpoint);
     return list;     
   }

   sortItemsByName():Observable<Item[]>
   {
     console.log('Item Service -Get Items Called ');
     let list=this.http.get<Item[]>(this.sortItemsByName_endpoint);
     return list;     
   }
   sortItemsByNameDesc():Observable<Item[]>
   {
     console.log('Item Service -Get Items Called ');
     let list=this.http.get<Item[]>(this.sortItemsByNameDesc_endpoint);
     return list;     
   }
   sortItemsByCategory():Observable<Item[]>
   {
     console.log('Item Service -Get Items Called ');
     let list=this.http.get<Item[]>(this.sortItemsByCategory_endpoint);
     return list;     
   }
   sortItemsByCategoryDesc():Observable<Item[]>
   {
     console.log('Item Service -Get Items Called ');
     let list=this.http.get<Item[]>(this.sortItemsByCategoryDesc_endpoint);
     return list;     
   }
   sortItemsByCost():Observable<Item[]>
   {
     console.log('Item Service -Get Items Called ');
     let list=this.http.get<Item[]>(this.sortItemsByCost_endpoint);
     return list;     
   }
   sortItemsByCostDesc():Observable<Item[]>
   {
     console.log('Item Service -Get Items Called ');
     let list=this.http.get<Item[]>(this.sortItemsByCostDesc_endpoint);
     return list;     
   }
}
