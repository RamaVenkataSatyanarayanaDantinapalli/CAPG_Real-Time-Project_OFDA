package com.cg.fds.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.CascadeType;
import javax.persistence.Embedded;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;


@Entity
public class Restaurant {
	@Id
	@SequenceGenerator(name="restaurant_id",initialValue=501,allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "restaurant_id")
	private int restaurantId;
	private String restaurantName;
	@Embedded
	private Address address;
	
	@ManyToMany(cascade=CascadeType.ALL)
	@JoinTable(
			name="RItems_Info",
			joinColumns=@JoinColumn(name="restaurant_Id"),
			inverseJoinColumns=@JoinColumn(name="item_Id"))
	/*@ManyToMany(fetch=FetchType.EAGER,cascade=CascadeType.PERSIST)
	@JoinTable(name="RItems_Info",joinColumns= {@JoinColumn(name="restaurantdetails")},inverseJoinColumns= {@JoinColumn(name="itemdetails")})*/
			private List<Item> itemList;
	private String managerName;
	private String contactNumber;

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
	
	public Restaurant(int restaurantId, String restaurantName, Address address, List<Item> itemList,String managerName, String contactNumber) 
	{
		super();
		this.restaurantId = restaurantId;
		this.restaurantName = restaurantName;
		this.address = address;
		this.itemList = itemList;
		this.managerName = managerName;
		this.contactNumber = contactNumber;
	}
	public Restaurant() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Restaurant [restaurantId=" + restaurantId + ", restaurantName=" + restaurantName + ", \naddress="
				+ address + ", \nitemList=" + itemList + ", \nmanagerName=" + managerName + ", contactNumber="
				+ contactNumber + "]";
	}
	
	public int compareTo(Restaurant res) {
		return this.restaurantId-res.getRestaurantId();
	}

}
