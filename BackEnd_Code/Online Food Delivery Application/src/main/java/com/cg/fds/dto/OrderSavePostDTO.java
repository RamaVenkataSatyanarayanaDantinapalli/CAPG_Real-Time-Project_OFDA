package com.cg.fds.dto;

import javax.validation.constraints.NotNull;

public class OrderSavePostDTO {
	
	
	//private int orderId;
	private String orderStatus;
	public OrderSavePostDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public OrderSavePostDTO(@NotNull(message="status could not be null") String orderStatus) {
		super();
		//this.orderId = orderId;
		this.orderStatus = orderStatus;
	}
	/*public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}*/
	public String getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}
	
	
	
	
	
}
