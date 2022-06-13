package com.cg.fds.dto;

public class LoginBasicInfoDTO {
	
	private  int customerId;
	private String userName;
	private String password;
	private boolean userRole;
	
	
	public LoginBasicInfoDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public int getCustomerId() {
		return customerId;
	}


	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}


	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public boolean getUserrole() {
		return userRole;
	}
	public void setUserrole(boolean userrole) {
		this.userRole = userrole;
	}
	
	
}
