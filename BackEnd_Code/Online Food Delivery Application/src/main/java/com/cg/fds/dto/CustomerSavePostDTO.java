package com.cg.fds.dto;

import javax.persistence.Embedded;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import com.cg.fds.entities.Address;

public class CustomerSavePostDTO {
	
	@NotNull(message = "customerId is empty")
	@Id
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
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
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
	
	public CustomerSavePostDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CustomerSavePostDTO(@NotNull(message = "customerId is empty") int customerId,
			@NotNull(message = "first name is empty") String firstName, String lastName, String gender, int age,
		    @NotNull(message = "Mobile number is empty") String mobileNumber,
			Address address, String email) {
		super();
		this.customerId = customerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.age = age;
		this.mobileNumber = mobileNumber;
		this.address = address;
		this.email = email;
	}

	

}
