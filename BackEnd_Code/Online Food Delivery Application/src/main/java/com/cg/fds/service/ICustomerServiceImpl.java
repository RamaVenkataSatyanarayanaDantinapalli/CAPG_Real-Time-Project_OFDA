package com.cg.fds.service;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.fds.dto.CustomerBasicInfoDTO;
import com.cg.fds.dto.CustomerSavePostDTO;
import com.cg.fds.entities.Customer;
import com.cg.fds.repository.ICustomerRepository;
import com.cg.fds.util.CustomerDTOConvertionclass;

@Service
public class ICustomerServiceImpl implements ICustomerService{
	
	@Autowired
	ICustomerRepository repository;
	
	@Autowired
	CustomerDTOConvertionclass dtoConvertion;
	
	@Override
	public CustomerBasicInfoDTO addCustomer(CustomerSavePostDTO customerDTO) {
		Customer cus = dtoConvertion.getCustomerFromPostCustomerDTO(customerDTO);
		
		Customer saveObj = repository.save(cus);
		
		CustomerBasicInfoDTO dtoObj = dtoConvertion.getCustomerBasicDTO(saveObj);
		return dtoObj;
	}

	@Override
	public Customer updateCustomer(Customer customer) {
		Customer customers=repository.findById(customer.getCustomerId()).get();
		customers.setFirstName(customer.getFirstName());
		customers.setLastName(customer.getLastName());
		customers.setGender(customer.getGender());
		customers.setAge(customer.getAge());
		customers.setMobileNumber(customer.getMobileNumber());
		customers.setAddress(customer.getAddress());
		customers.setEmail(customer.getEmail());
		repository.save(customers);
		
		return customers;
	}

	@Override
	public String removeCustomer(int customerId) {
		List<Customer> list = (List<Customer>) repository.findAll();
		String status ="";
		for(Customer cus: list) {
			if(cus.getCustomerId() == customerId) {
				repository.deleteById(customerId);
				status = "Success";
			}
			else {
				status ="Fail";
			}
		}
		
		return status;
	}

	@Override
	public Customer viewCustomer(int customerId) {
		return repository.findById(customerId).get();
	}

	@Override
	public List<Customer> viewAllCustomer() {
		List<Customer> customerList = (List<Customer>) repository.findAll();
		return customerList;
	}
	
	@Override
	public List<Customer> SortCustomerById() {
		List<Customer> cus= (List<Customer>) repository.findAll();
		com.cg.fds.sortings.SortCustomerById cusById = new com.cg.fds.sortings.SortCustomerById();
		Collections.sort(cus,cusById);
		return cus;
	}

}
