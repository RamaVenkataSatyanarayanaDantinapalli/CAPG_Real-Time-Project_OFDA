package com.cg.fds.util;

import org.springframework.stereotype.Component;

import com.cg.fds.dto.CustomerBasicInfoDTO;
import com.cg.fds.dto.CustomerSavePostDTO;
import com.cg.fds.entities.Customer;

@Component
public class CustomerDTOConvertionclass {
	public CustomerBasicInfoDTO getCustomerBasicDTO(Customer customer) {
		
		CustomerBasicInfoDTO dtoObj=new CustomerBasicInfoDTO();
		dtoObj.setCustomerId(customer.getCustomerId());
		dtoObj.setFirstName(customer.getFirstName());
		dtoObj.setLastName(customer.getLastName());
		dtoObj.setGender(customer.getGender());
		dtoObj.setAge(customer.getAge());
		dtoObj.setMobileNumber(customer.getMobileNumber());
		dtoObj.setAddress(customer.getAddress());
		dtoObj.setEmail(customer.getEmail());
		
		return dtoObj;
	}
	
	public Customer getCustomerFromPostCustomerDTO(CustomerSavePostDTO dto) {
		Customer cus=new Customer();
		cus.setCustomerId(dto.getCustomerId());
		cus.setFirstName(dto.getFirstName());
		cus.setLastName(dto.getLastName());
		cus.setGender(dto.getGender());
		cus.setAge(dto.getAge());
		cus.setMobileNumber(dto.getMobileNumber());
		cus.setAddress(dto.getAddress());
		cus.setEmail(dto.getEmail());
		
		return cus;
	}
}
