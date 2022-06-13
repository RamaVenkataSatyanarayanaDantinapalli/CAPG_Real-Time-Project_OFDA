import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import { Orders } from './orders';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {
  private endpoint='http://localhost:8084/order';
  private getAllorders_EndPoint=environment.ProductUrl+'/orders';
  private countOrdersByDate_EndPoint=this.endpoint+'/countOfOrdersByDate';
  private update_EndPoint=environment.ProductUrl+'/update/orderId';
  private delete_endPoint=this.endpoint+'/del';
  //private getOrder_endpoint=this.address+'/getorder';
  private save_order=environment.ProductUrl+'/save';
  private sortOrdersById_EndPoint=environment.ProductUrl+'/sortOrderById';
  private sortOrdersByIdDesc_EndPoint=environment.ProductUrl+'/sortOrderByIdDesc';
  private sortOrdersByStatus_EndPoint=environment.ProductUrl+'/sortOrderByStatus';
  private sortOrdersByStatusDesc_EndPoint=environment.ProductUrl+'/sortOrderByStatusDesc';
  private sortOrdersByDate_EndPoint=environment.ProductUrl+'/sortOrderByDate';
  private sortOrdersByDateDesc_EndPoint=environment.ProductUrl+'/sortOrderByDateDesc';
  //order:Orders=new Orders(0,new Date(),'');
  order:Orders=new Orders();
  
orderId:number=0;
orderStatus:string="";
  constructor(private http:HttpClient) { }
  
  getAllOrders():Observable<any>
  {
    console.log(this.getAllOrders);
    console.log('Orders Service - Get All Orders Called');
    return this.http.get<any>(this.getAllorders_EndPoint);
  }
  countOrdersByDate(date:Date):Observable<any>
  {
   
    return this.http.get<any>(`${this.countOrdersByDate_EndPoint}?date=${date}`);
  }
  //http://localhost:8086/order/update/orderId/204/orderStatus/Placed
  updateOrders(orderId:number,orderStatus:String):Observable<Orders>
  {
    return this.http.put<Orders>(`${this.update_EndPoint}/${orderId}/orderStatus/${orderStatus}`,Orders);
  }
 // http://localhost:8086/order/del/207
 deleteOrders(orderId:number):Observable<Object>
 {
   return this.http.delete(this.delete_endPoint+"/"+orderId);
 }
 //http://localhost:8086/order/getOrder?orderId=211
 getOrderById(orderId:number):Observable<any>
 {
    return this.http.get<any>(this.endpoint+"/getOrder?orderId="+orderId);
 }
 saveOrder(order:Orders):Observable<object>{
   return this.http.post(`${this.save_order}`,order);
 }

 sortOrdersById():Observable<any>{
  console.log(this.getAllOrders);
  console.log('Orders Service - Get Sort By Id Orders Called');
  return this.http.get<any>(this.sortOrdersById_EndPoint);

 }
 sortOrdersByIdDesc():Observable<any>{
  console.log(this.getAllOrders);
  console.log('Orders Service - Get Sort By Id Desc Orders Called');
  return this.http.get<any>(this.sortOrdersByIdDesc_EndPoint);

 }
 sortOrdersByStatus():Observable<any>{
  console.log(this.getAllOrders);
  console.log('Orders Service - Get Sort By Status Orders Called');
  return this.http.get<any>(this.sortOrdersByStatus_EndPoint);

 }
 sortOrdersByStatusDesc():Observable<any>{
  console.log(this.getAllOrders);
  console.log('Orders Service - Get Sort By Status Desc Orders Called');
  return this.http.get<any>(this.sortOrdersByStatusDesc_EndPoint);

 }
 sortOrdersByDate():Observable<any>{
  console.log(this.getAllOrders);
  console.log('Orders Service - Get Sort By Date Orders Called');
  return this.http.get<any>(this.sortOrdersByDate_EndPoint);

 }
 sortOrdersByDateDesc():Observable<any>{
  console.log(this.getAllOrders);
  console.log('Orders Service - Get Sort By Date Desc Orders Called');
  return this.http.get<any>(this.sortOrdersByDateDesc_EndPoint);

 }

}
