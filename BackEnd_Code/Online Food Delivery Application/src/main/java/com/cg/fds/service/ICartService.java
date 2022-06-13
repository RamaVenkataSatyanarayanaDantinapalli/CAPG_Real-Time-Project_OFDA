package com.cg.fds.service;

import org.springframework.stereotype.Service;

import com.cg.fds.entities.FoodCart;
import com.cg.fds.entities.Item;

@Service
public interface ICartService {

	public FoodCart addItemToCart(FoodCart cart,Item item);
	public FoodCart increaseQuantity(FoodCart cart,Item item,int quantity);
	public FoodCart reduceQuantity(FoodCart cart,Item item,int quantity);
	public FoodCart removeItem(FoodCart cart,Item item);
	public FoodCart clearCart(FoodCart cart);
}
