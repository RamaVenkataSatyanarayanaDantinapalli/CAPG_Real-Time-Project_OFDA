package com.cg.fds.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cg.fds.dto.RestaurantBasicInfoDTO;
import com.cg.fds.dto.RestaurantSavePostDTO;
import com.cg.fds.entities.Item;
import com.cg.fds.entities.Restaurant;


import com.cg.fds.entities.Restaurant;

@Service
public interface IRestaurantService {
	
	public RestaurantBasicInfoDTO addRestaurant(RestaurantSavePostDTO restaurantDto);
	public Restaurant updateRestaurant(Restaurant res);
	public String removeRestaurant(int restaurantId);
	public List<Restaurant> viewRestaurantByName(String name);
	public List<Restaurant> viewAllRestaurants();
	public List<Restaurant> viewRestaurantByID(int restaurantId);
	public List<Restaurant> viewRestaurantByItemName(String Itemname);
	public List<Restaurant> viewRestaurantByPincode(int pincode);
	public List<Restaurant> viewRestaurantByCity(String cityName);
	
	public List<Restaurant> SortRestaurantById();
	public List<Restaurant> SortRestaurantByName();
	public List<Restaurant> SortRestaurantByCity();
	
}
