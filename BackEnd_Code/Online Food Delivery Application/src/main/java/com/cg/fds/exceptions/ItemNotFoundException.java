package com.cg.fds.exceptions;

public class ItemNotFoundException extends Exception{
	
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
	
	public ItemNotFoundException() {
		setErrorMsg("Items Not Available");
		setActionType("Admin should Add/Update the Items");
	}
	
	public ItemNotFoundException(int value) {
		setErrorMsg("Item Not Found with the given value : "+value);
		setActionType("Please Provide Valid Value to Perform this Action");
	}
	
	public ItemNotFoundException(String name) {
		setErrorMsg("Item Not Found with the given value : "+name);
		setActionType("Please Provide Valid Name to Perform this Action");
	}
}
