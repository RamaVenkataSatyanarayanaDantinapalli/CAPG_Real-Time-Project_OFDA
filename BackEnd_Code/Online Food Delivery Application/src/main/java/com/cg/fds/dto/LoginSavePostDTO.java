package com.cg.fds.dto;

import javax.validation.constraints.NotNull;

public class LoginSavePostDTO {
	
	@NotNull(message = "userName is empty")
	private String userName;
	@NotNull(message = "password is empty")
	private String password;
	@NotNull(message = "userrole is empty")
	private boolean userRole;
	
	public LoginSavePostDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public LoginSavePostDTO(@NotNull(message = "username is empty") String userName,
			@NotNull(message = "password is empty") String password,
			@NotNull(message = "userrole is empty") boolean userRole) {
		super();
		this.userName = userName;
		this.password = password;
		this.userRole = userRole;
	}

	public String getUsername() {
		return userName;
	}

	public void setUsername(String username) {
		this.userName = username;
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
