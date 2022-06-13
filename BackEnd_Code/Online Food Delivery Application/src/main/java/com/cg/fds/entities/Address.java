package com.cg.fds.entities;


import javax.persistence.Embeddable;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Embeddable
public class Address {
	
	private String buildingName;
	private String area;
	private int streetNo;
	private String city;
	private String state;
	private String country;
	private int pincode;


	public String getBuildingName() {
		return buildingName;
	}
	public void setBuildingName(String buildingName) {
		this.buildingName = buildingName;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public int getStreetNo() {
		return streetNo;
	}
	public void setStreetNo(int streetNo) {
		this.streetNo = streetNo;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public Address() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Address(int addressId, String buildingName, String area, int streetNo, String city, String state,
			String country, int pincode) 
	{
		super();
		this.buildingName = buildingName;
		this.area = area;
		this.streetNo = streetNo;
		this.city = city;
		this.state = state;
		this.country = country;
		this.pincode = pincode;
	}
	@Override
	public String toString() {
		return "Address [buildingName=" + buildingName + ", area=" + area + ", streetNo=" + streetNo + ", city=" + city
				+ ", state=" + state + ", country=" + country + ", pincode=" + pincode + "]";
	}
	
	
	
}
