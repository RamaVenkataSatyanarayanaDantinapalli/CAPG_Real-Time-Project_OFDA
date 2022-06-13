package com.cg.fds.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

@Entity
public class FoodCart {
    @Id
    @SequenceGenerator(name="cart_id",initialValue=301,allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "cart_id")
	private int cartId;
    @OneToOne
	private Customer customer;
    @ManyToMany(cascade=CascadeType.ALL)
	@JoinTable(
			name="Cart_Info",
			joinColumns=@JoinColumn(name="cartdetails"),
			inverseJoinColumns=@JoinColumn(name="itemdetails"))
	private List<Item> itemList;
	public int getCartId() {
		return cartId;
	}
	public void setCartId(int cartId) {
		this.cartId = cartId;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public List<Item> getItemList() {
		return itemList;
	}
	public void setItemList(List<Item> itemList) {
		this.itemList = itemList;
	}
	public FoodCart(int cartId, Customer customer, List<Item> itemList) {
		super();
		this.cartId = cartId;
		this.customer = customer;
		this.itemList = itemList;
	}
	public FoodCart() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "FoodCart [cartId=" + cartId + ", customer=" + customer + ", itemList=" + itemList + "]";
	}
	
	
}
