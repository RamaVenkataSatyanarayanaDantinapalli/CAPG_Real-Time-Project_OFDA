package com.cg.fds.entities;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;


public class Bill {	// change it Order DTO which contain bill 
	@Id
	private int billId;
	@OneToOne
	private OrderDetails order;
	private int totalItem;
	private double totalCost;
	LocalDateTime billDate;
	public int getBillId() {
		return billId;
	}
	public void setBillId(int billId) {
		this.billId = billId;
	}
	public OrderDetails getOrder() {
		return order;
	}
	public void setOrder(OrderDetails order) {
		this.order = order;
	}
	public int getTotalItem() {
		return totalItem;
	}
	public void setTotalItem(int totalItem) {
		this.totalItem = totalItem;
	}
	public double getTotalCost() {
		return totalCost;
	}
	public void setTotalCost(double totalCost) {
		this.totalCost = totalCost;
	}
	public LocalDateTime getBillDate() {
		return billDate;
	}
	public void setBillDate(LocalDateTime billDate) {
		this.billDate = billDate;
	}
	public Bill(int billId, OrderDetails order, int totalItem, double totalCost, LocalDateTime billDate) {
		super();
		this.billId = billId;
		this.order = order;
		this.totalItem = totalItem;
		this.totalCost = totalCost;
		this.billDate = billDate;
	}
	public Bill() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Bill [billId=" + billId + ", order=" + order + ", totalItem=" + totalItem + ", totalCost=" + totalCost
				+ ", billDate=" + billDate + "]";
	}
	
	
}
