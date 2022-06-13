package com.cg.fds.entities;

import java.util.List;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.persistence.Embeddable;
import javax.persistence.Embedded;

@Entity
public class Item {
	@Id
	@SequenceGenerator(name="item_id",initialValue=401,allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "item_id")
	private int itemId;
	@NotNull(message = "Item Name is empty")
	private String itemName;
	@NotNull(message = "Item Category is empty")
	private String category;
	@Min(value = 50,message = "Min Cost is 50")
	private double cost;
	
	public int getItemId() {
		return itemId;
	}
	public void setItemId(int itemId) {
		this.itemId = itemId;
	}
	public String getItemName() {
		return itemName;
	}
	public void setItemName(String itemName) {
		this.itemName = itemName;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	
	public double getCost() {
		return cost;
	}
	public void setCost(double cost) {
		this.cost = cost;
	}
	
	
	public Item() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public Item(int itemId, @NotNull(message = "Item Name is empty") String itemName,
			@NotNull(message = "Item Category is empty") String category,
			@Min(value = 50, message = "Min Cost is 50") double cost) {
		super();
		this.itemId = itemId;
		this.itemName = itemName;
		this.category = category;
		this.cost = cost;
	}
	public int compareTo(Item it) {
		return this.itemId-it.getItemId();
	}
	@Override
	public String toString() {
		return "Item [itemId=" + itemId + ", itemName=" + itemName + ", category=" + category + ", cost=" + cost + "]";
	}
	
	
}
