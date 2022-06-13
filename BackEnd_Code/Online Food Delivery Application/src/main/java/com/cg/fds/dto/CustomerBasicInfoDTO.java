package com.cg.fds.dto;

import javax.persistence.Embedded;
import javax.validation.constraints.NotNull;
import com.cg.fds.entities.Address;

public class CustomerBasicInfoDTO {
	
	@NotNull(message = "customerId is empty")
	private int customerId;
	@NotNull(message = "first name is empty")
	private String firstName;
	private String lastName;
	private String gender;
	private int age;

	@NotNull(message = "Mobile number is empty")
	private String mobileNumber;
	@Embedded
	private Address address;
	private String email;

	public int getCustomerId() {
		return customerId;
	}
	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public CustomerBasicInfoDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
