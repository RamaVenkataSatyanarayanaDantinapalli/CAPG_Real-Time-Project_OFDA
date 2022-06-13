package com.cg.fds.util;

import org.springframework.stereotype.Component;

import com.cg.fds.dto.RestaurantBasicInfoDTO;
import com.cg.fds.dto.RestaurantSavePostDTO;
import com.cg.fds.entities.Address;
import com.cg.fds.entities.Restaurant;

@Component
public class RestaurantDTOConvertionClass {
	public RestaurantBasicInfoDTO getRestaurantBasicDTO(Restaurant restaurant) {
		
		RestaurantBasicInfoDTO dtoObj=new RestaurantBasicInfoDTO();
		dtoObj.setRestaurantId(restaurant.getRestaurantId());
		dtoObj.setRestaurantName(restaurant.getRestaurantName());
		dtoObj.setAddress(restaurant.getAddress());
		dtoObj.setItemList(restaurant.getItemList());
		dtoObj.setManagerName(restaurant.getManagerName());
		dtoObj.setContactNumber(restaurant.getContactNumber());
		
		return dtoObj;
	}
	
	public Restaurant getRestaurantFromPostRestaurantDTO(RestaurantSavePostDTO dto) {
		Restaurant res=new Restaurant();
		res.setRestaurantName(dto.getRestaurantName());
		res.setAddress(dto.getAddress());
		res.setItemList(dto.getItemList());
		res.setManagerName(dto.getManagerName());
		res.setContactNumber(dto.getContactNumber());
		
		return res;
	}
}
