package com.cg.fds.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.NotNull;

@Entity
public class OrderDetails {
	@Id
	@SequenceGenerator(name="order_id",initialValue=201,allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "order_id")
	private int orderId;
	
	
	private LocalDate orderDate;
	//add restu info and list of items
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(
			name="Restaurant_Info",
			joinColumns=@JoinColumn(name="orderdetails"),
			inverseJoinColumns=@JoinColumn(name="restaurantdetails"))
	private List<Restaurant> restaurant;
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(
			name="Items_Info",
			joinColumns=@JoinColumn(name="orderdetails"),
			inverseJoinColumns=@JoinColumn(name="itemdetails"))
	private List<Item> listOfItems;
	
	@NotNull(message="status cound not be null")
	private String orderStatus;	//order reciveved and delivered  or preparing

	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	
	
	
	public LocalDate getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}
	public List<Restaurant> getRestaurant() {
		return restaurant;
	}
	public void setRestaurant(List<Restaurant> restaurant) {
		this.restaurant = restaurant;
	}
	public List<Item> getListOfItems() {
		return listOfItems;
	}
	public void setListOfItems(List<Item> listOfItems) {
		this.listOfItems = listOfItems;
	}
	public String getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}
	public OrderDetails(int orderId, LocalDate orderDate, List<Restaurant> restaurant, List<Item> listOfItems,
			String orderStatus) {
		super();
		this.orderId = orderId;
		this.orderDate = orderDate;
		this.restaurant = restaurant;
		this.listOfItems = listOfItems;
		this.orderStatus = orderStatus;
	}
	public OrderDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "OrderDetails [orderId=" + orderId + ", orderDate=" + orderDate + ", restaurant=" + restaurant
				+ ", listOfItems=" + listOfItems + ", orderStatus=" + orderStatus + "]";
	}
	
	
	

}
