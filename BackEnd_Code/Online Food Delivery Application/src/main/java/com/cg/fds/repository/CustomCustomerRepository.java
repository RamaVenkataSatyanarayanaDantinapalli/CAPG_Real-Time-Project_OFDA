package com.cg.fds.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.cg.fds.entities.Customer;
@Repository
public interface  CustomCustomerRepository {
	public Customer addCustomer(Customer customer);
	public Customer updateCustomer(Customer customer);
	public Customer removeCustomer(Customer customer);
	public List<Customer> viewCustomer(int id);
	//public List<Customer> viewAllCustomer(String restaurantname); 
}
