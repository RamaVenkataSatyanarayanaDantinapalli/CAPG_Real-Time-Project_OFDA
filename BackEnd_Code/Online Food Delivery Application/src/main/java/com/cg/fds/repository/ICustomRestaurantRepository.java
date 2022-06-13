package com.cg.fds.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.cg.fds.entities.Restaurant;

@Repository
public interface ICustomRestaurantRepository {
	public List<Restaurant> viewRestaurantByName(String name);
	public List<Restaurant> viewAllRestaurants();
	public List<Restaurant> viewRestaurantByPincode(int pincode);
	public List<Restaurant> viewRestaurantByCity(String cityName);
	public void removeById(int id);
}
