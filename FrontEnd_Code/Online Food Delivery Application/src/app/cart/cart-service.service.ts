import { Injectable } from '@angular/core';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cart:Cart=new Cart();
  constructor() { }
  setCart(cart:Cart){
    this.cart=cart;
  }
  getCart(){
    return this.cart;
  }
}
