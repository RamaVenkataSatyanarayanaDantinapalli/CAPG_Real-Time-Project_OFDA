package com.cg.fds.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cg.fds.dto.CustomerBasicInfoDTO;
import com.cg.fds.dto.CustomerSavePostDTO;
import com.cg.fds.entities.Customer;


@Service
public interface ICustomerService {

	public CustomerBasicInfoDTO addCustomer(CustomerSavePostDTO customer);
	public Customer updateCustomer(Customer customer);
	public String removeCustomer(int customerId);
	public Customer viewCustomer(int customerId);
	public List<Customer> viewAllCustomer();
	//view order based customer
	public List<Customer> SortCustomerById();
}
