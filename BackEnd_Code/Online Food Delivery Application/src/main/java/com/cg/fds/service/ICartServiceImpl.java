package com.cg.fds.service;

import org.springframework.stereotype.Service;

import com.cg.fds.entities.FoodCart;
import com.cg.fds.entities.Item;

@Service
public class ICartServiceImpl implements ICartService {

	@Override
	public FoodCart addItemToCart(FoodCart cart, Item item) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public FoodCart increaseQuantity(FoodCart cart, Item item, int quantity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public FoodCart reduceQuantity(FoodCart cart, Item item, int quantity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public FoodCart removeItem(FoodCart cart, Item item) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public FoodCart clearCart(FoodCart cart) {
		// TODO Auto-generated method stub
		return null;
	}

}
