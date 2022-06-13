package com.cg.fds.dto;

public class ItemBasicInfoDTO {
	
	private int itemId;
	private String itemName;
	
	private String category;
	
	private double cost;

	public ItemBasicInfoDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
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
	
	
}
