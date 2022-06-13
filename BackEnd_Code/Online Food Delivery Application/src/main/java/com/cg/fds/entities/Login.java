package com.cg.fds.entities;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.NotNull;
@Entity
public class Login {
	@Id
	@SequenceGenerator(name="login_id",initialValue=101,allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "login_id")
	private int customerId;
	@NotNull(message = "userName is empty")
	private String userName;
	@NotNull(message = "password Name is empty")
	private String password;
	//String role		Admin or user
	@NotNull(message = "userrole is empty")
	private Boolean userRole;	//true  =  admin, false = user
	
	
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
	
	public Boolean getUserRole() {
		return userRole;
	}
	public void setUserRole(Boolean userRole) {
		userRole = userRole;
	}
	public Login(int customerId,String userName, String password,boolean userRole) {
		super();
		this.customerId=customerId;
		this.userName = userName;
		this.password = password;
		this.userRole=userRole;
	}
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(customerId, password, userName, userRole);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Login other = (Login) obj;
		return customerId == other.customerId && Objects.equals(password, other.password)
				&& Objects.equals(userName, other.userName) && Objects.equals(userRole, other.userRole);
	}
	@Override
	public String toString() {
		return "Login [customerId=" + customerId + ", userName=" + userName + ", password=" + password + ", userRole="
				+ userRole + "]";
	}
}
