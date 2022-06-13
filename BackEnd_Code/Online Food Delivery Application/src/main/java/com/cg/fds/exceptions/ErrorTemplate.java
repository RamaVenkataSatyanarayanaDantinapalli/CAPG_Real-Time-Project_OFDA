package com.cg.fds.exceptions;

public class ErrorTemplate {
	private String errorMsg;
	private String actionType;
	public ErrorTemplate() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ErrorTemplate(String errorMsg, String actionType) {
		super();
		this.errorMsg = errorMsg;
		this.actionType = actionType;
	}
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
	
	
	

}
