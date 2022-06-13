package com.cg.fds.repository;

import org.springframework.stereotype.Repository;

import com.cg.fds.entities.FoodCart;
import com.cg.fds.entities.Item;

@Repository
public interface ICartRepository {

	public FoodCart addItemToCart(FoodCart cart,Item item);
	public FoodCart increaseQuantity(FoodCart cart,Item item,int quantity);
	public FoodCart reduceQuantity(FoodCart cart,Item item,int quantity);
	public FoodCart removeItem(FoodCart cart,Item item);
	public FoodCart clearCart(FoodCart cart);

}
