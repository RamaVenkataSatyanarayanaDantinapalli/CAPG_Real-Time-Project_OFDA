package com.cg.fds.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.fds.dto.RestaurantBasicInfoDTO;
import com.cg.fds.dto.RestaurantSavePostDTO;
import com.cg.fds.entities.Item;
import com.cg.fds.entities.Restaurant;
import com.cg.fds.repository.IItemRepository;
import com.cg.fds.repository.IRestaurantRepository;
import com.cg.fds.util.RestaurantDTOConvertionClass;
import com.cg.fds.sortings.*;

@Service
public class IRestaurantServiceImpl implements IRestaurantService{
	
	@Autowired
	IRestaurantRepository repository;
	
	@Autowired
	IItemRepository itrepository;
	
	@Autowired
	RestaurantDTOConvertionClass dtoConvertion;
	
	@Override
	public RestaurantBasicInfoDTO addRestaurant(RestaurantSavePostDTO restaurantDto) {
		
		Restaurant res=dtoConvertion.getRestaurantFromPostRestaurantDTO(restaurantDto);
		
		Restaurant saveObj=repository.save(res);
		RestaurantBasicInfoDTO dtoObj=dtoConvertion.getRestaurantBasicDTO(saveObj);
		return dtoObj;
	}

	@Override
	public String removeRestaurant(int restaurantId) {
		List<Restaurant> list = (List<Restaurant>) repository.findAll();
		String status="";
		for(Restaurant res:list) {
			if(res.getRestaurantId()==restaurantId) {
				repository.deleteById(restaurantId);
				status="Success";
			}
			else {
				status="Fail";
			}
		}
		
		return status;
	}

	@Override
	public Restaurant updateRestaurant(Restaurant res) {
		Restaurant restaurants=repository.findById(res.getRestaurantId()).get();
		restaurants.setRestaurantName(res.getRestaurantName());
		restaurants.setAddress(res.getAddress());
		restaurants.setItemList(res.getItemList());
		restaurants.setManagerName(res.getManagerName());
		restaurants.setContactNumber(res.getContactNumber());
		repository.save(restaurants);
		
		return repository.findById(res.getRestaurantId()).get();
	}
	
	@Override
	public List<Restaurant> viewRestaurantByID(int restaurantId) {
		List<Restaurant> list=new ArrayList<>();
		Restaurant res=repository.findById(restaurantId).get();
		list.add(res);
		return list;
	}
	
	@Override
	public List<Restaurant> viewRestaurantByName(String restaurantName) {
		return repository.viewRestaurantByName(restaurantName);
	}

	@Override
	public List<Restaurant> viewAllRestaurants() {
		List<Restaurant> list = (List<Restaurant>) repository.findAll();
		return list;
	}

	@Override
	public List<Restaurant> viewRestaurantByPincode(int pincode) {
		return repository.viewRestaurantByPincode(pincode);
	}
	
	@Override
	public List<Restaurant> viewRestaurantByCity(String cityName) {
		return repository.viewRestaurantByCity(cityName);
	}

	@Override
	public List<Restaurant> viewRestaurantByItemName(String ItemName) {
		List<Restaurant> res= (List<Restaurant>) repository.findAll();
		Item item=itrepository.viewAllItemsByName(ItemName).get(0);
		List<Restaurant> list=new ArrayList<>();
		for(Restaurant r:res) {
			if(r.getItemList().contains(item)) {
				list.add(r);
			}
		}
		return list;
	}	

	@Override
	public List<Restaurant> SortRestaurantById() {
		List<Restaurant> res= (List<Restaurant>) repository.findAll();
		SortRestaurantById resById=new SortRestaurantById();
		Collections.sort(res,resById);
		return res;
	}

	@Override
	public List<Restaurant> SortRestaurantByName() {
		List<Restaurant> res= (List<Restaurant>) repository.findAll();
		SortRestaurantByName resByName=new SortRestaurantByName();
		Collections.sort(res,resByName);
		return res;
	}

	@Override
	public List<Restaurant> SortRestaurantByCity() {
		List<Restaurant> res= (List<Restaurant>) repository.findAll();
		SortRestaurantByCity resByCity=new SortRestaurantByCity();
		Collections.sort(res,resByCity);
		return res;
	}
	
	

	

}
