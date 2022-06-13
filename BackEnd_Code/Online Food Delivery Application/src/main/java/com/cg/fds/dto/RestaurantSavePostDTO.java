package com.cg.fds.dto;

import java.util.List;

import javax.persistence.Embedded;
import javax.validation.constraints.NotNull;

import com.cg.fds.entities.Address;
import com.cg.fds.entities.Item;

public class RestaurantSavePostDTO {
	
	@NotNull(message = "Restaurant Name is empty")
	private String restaurantName;
	@NotNull(message = "Manager Name is empty")
	@Embedded
	private Address address;
	private List<Item> itemList;
	@NotNull(message = "Manager Name is empty")
	private String managerName;
	private String contactNumber;
	
	
	public RestaurantSavePostDTO() {
		super();
		// TODO Auto-generated constructor stub
	}


	public RestaurantSavePostDTO(@NotNull(message = "Restaurant Name is empty") String restaurantName,
			@NotNull(message = "Manager Name is empty") Address address, List<Item> itemList,
			@NotNull(message = "Manager Name is empty") String managerName, String contactNumber) {
		super();
		this.restaurantName = restaurantName;
		this.address = address;
		this.itemList = itemList;
		this.managerName = managerName;
		this.contactNumber = contactNumber;
	}


	public String getRestaurantName() {
		return restaurantName;
	}


	public void setRestaurantName(String restaurantName) {
		this.restaurantName = restaurantName;
	}


	public Address getAddress() {
		return address;
	}


	public void setAddress(Address address) {
		this.address = address;
	}


	public List<Item> getItemList() {
		return itemList;
	}


	public void setItemList(List<Item> itemList) {
		this.itemList = itemList;
	}


	public String getManagerName() {
		return managerName;
	}


	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}


	public String getContactNumber() {
		return contactNumber;
	}


	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}


	
	
	
	
}
