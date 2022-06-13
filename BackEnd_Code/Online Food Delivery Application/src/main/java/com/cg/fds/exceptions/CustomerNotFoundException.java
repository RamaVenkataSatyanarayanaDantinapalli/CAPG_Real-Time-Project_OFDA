package com.cg.fds.exceptions;

public class CustomerNotFoundException extends Exception{
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
	
	public CustomerNotFoundException() {
		setErrorMsg("Customer Not Available");
		setActionType("Admin should Add/Update the Customer");
	}
	
	
	public CustomerNotFoundException(int value) {
		setErrorMsg("Customer Not Found with the Value : "+value);
		setActionType("Please Provide Valid Value to view the Customer");
	}

}
