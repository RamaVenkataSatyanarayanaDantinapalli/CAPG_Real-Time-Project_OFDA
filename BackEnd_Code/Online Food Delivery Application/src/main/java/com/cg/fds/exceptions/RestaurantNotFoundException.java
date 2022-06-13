package com.cg.fds.exceptions;

public class RestaurantNotFoundException extends Exception 
{
	private String errorMsg;
	private String actionType;
	
	public String getErrorMsg() {
		return errorMsg;
	}
	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}
	
	
	public String getActionType() {
		return actionType;
	}
	public void setActionType(String actionType) {
		this.actionType = actionType;
	}
	
	public RestaurantNotFoundException() {
		setErrorMsg("Restaurants Not Available");
		setActionType("Admin should Add/Update the Restaurant");
	}
	public RestaurantNotFoundException(String name) {
		setErrorMsg("Restaurant Not Found with the Name : "+name);
		setActionType("Please Provide Valid Name to Perform this Action");
	}
	
	public RestaurantNotFoundException(int value) {
		setErrorMsg("Restaurant Not Found with the Value : "+value);
		setActionType("Please Provide Valid Value to Perform this Action");
	}
	
}
