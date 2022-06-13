package com.cg.fds.dto;

import java.util.List;

import javax.persistence.Embedded;
import javax.validation.constraints.NotNull;

import com.cg.fds.entities.Address;
import com.cg.fds.entities.Item;

public class RestaurantBasicInfoDTO {
	private int restaurantId;
	private String restaurantName;
	@Embedded
	private Address address;
	private List<Item> itemList;
	@NotNull(message = "Manager Name is empty")
	private String managerName;
	private String contactNumber;
	public RestaurantBasicInfoDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getRestaurantId() {
		return restaurantId;
	}
	public void setRestaurantId(int restaurantId) {
		this.restaurantId = restaurantId;
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
