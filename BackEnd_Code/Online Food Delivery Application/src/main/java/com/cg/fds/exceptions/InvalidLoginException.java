package com.cg.fds.exceptions;

public class InvalidLoginException extends Exception{
	
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
	
	public InvalidLoginException() {
		setErrorMsg("Login Failed");
		setActionType("Please Login again with valid Credentials");
	}
	public InvalidLoginException(String userName) {
		setErrorMsg("User Not Found with the given value : "+userName);
		setActionType("Please Provide Valid User Name to Perform this Action");
	}
}
