package com.cg.fds.web;


import org.springframework.validation.annotation.Validated;
import org.springframework.http.HttpStatus;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cg.fds.repository.ICustomRestaurantRepository;
import com.cg.fds.service.ICustomerService;
import com.cg.fds.service.ICustomerServiceImpl;
import com.cg.fds.service.IRestaurantService;
import com.cg.fds.dto.CustomerSavePostDTO;
import com.cg.fds.dto.LoginBasicInfoDTO;
import com.cg.fds.entities.Customer;
import com.cg.fds.entities.FoodCart;
import com.cg.fds.entities.Restaurant;
import com.cg.fds.dto.CustomerBasicInfoDTO;
import com.cg.fds.exceptions.CustomerNotFoundException;
import com.cg.fds.exceptions.InvalidLoginException;

@RestController
@CrossOrigin(origins = {"http://localhost:8084","http://localhost:4200"},allowedHeaders = "*")
@RequestMapping("/app")
@Validated
public class CustomerRestController {
	
	@Autowired
	ICustomerService restcustomerservice;
	
	
	@PostMapping("/addcustomer")
	public ResponseEntity<CustomerBasicInfoDTO> addCustomer(@RequestBody @Valid CustomerSavePostDTO c) throws InvalidLoginException
	{
		//HttpSession session = request.getSession(false);
		//if(session!=null) {
			System.out.println("--->> "+c.getFirstName()+" - "+c.getAge()+" - "+c.getMobileNumber());
			CustomerBasicInfoDTO dto=restcustomerservice.addCustomer(c);
		return new ResponseEntity<CustomerBasicInfoDTO>(dto,HttpStatus.OK);
	/*	}
		else {
			throw new InvalidLoginException();
		}
		*/	
	}
	
	@GetMapping("/viewallcustomers")
	public List<Customer> getAllCustomer() throws CustomerNotFoundException//HttpServletRequest request) throws CustomerNotFoundException, InvalidLoginException
	{
	//	HttpSession session = request.getSession(false);
		//if(session != null) {
			List<Customer> cus= restcustomerservice.viewAllCustomer();
		if(cus.size()!=0) {
			return cus;
		}
		else {
			throw new CustomerNotFoundException();
		}
		
	/*	else {
			throw new InvalidLoginException();
		}
	
		return null;*/
	}
	
	@GetMapping("/viewcustomerbyid{customerId}")
	public Customer viewCustomerById(@PathVariable int customerId) throws CustomerNotFoundException//, HttpServletRequest request) throws CustomerNotFoundException, InvalidLoginException
	{
//		HttpSession session = request.getSession(false);
	//	if(session != null) {
			Customer cus=restcustomerservice.viewCustomer(customerId);
		if(cus!=null) {
			return cus;
		}
		throw new CustomerNotFoundException(customerId);
	/*	}
		else {
			throw new InvalidLoginException();
		}*/
	}
	
	@PutMapping("/updatecustomer")
	public String updateCustomer(@RequestBody Customer customer) throws CustomerNotFoundException//,HttpServletRequest request)throws InvalidLoginException, CustomerNotFoundException {
	{	
//		HttpSession session = request.getSession(false);
	//	if(session != null) {
			Customer cus=restcustomerservice.updateCustomer(customer);
		if(cus!=null) {
			return "Customer "+cus.getEmail()+" Mail Details Updated Successfully\n\n";
		}
		else {
			//return "Customer "+cus.getEmail()+" Mail Details Not Updated Successfully";
			throw new CustomerNotFoundException();
		}
	/*	}
		else {
			throw new InvalidLoginException();
		}*/
	}
	
	@DeleteMapping("/removecustomer/{customerId}")
	public String removeCustomer(@RequestParam int customerId) throws CustomerNotFoundException//,HttpServletRequest request) throws CustomerNotFoundException, InvalidLoginException
	{
	//	HttpSession session = request.getSession(false);
//		if(session != null) 
	//	{
			String status = restcustomerservice.removeCustomer(customerId);
			if(status.equals("Success")) 
			{
				return "Customer "+customerId+" Removed Successfully";
			}
			else 
			{
				throw new CustomerNotFoundException();
			}
	/*	}
		else 
		{
			throw new InvalidLoginException();
		}*/
	}
	
	@GetMapping("/sortcustomerbyid")
	public List<Customer> sortItemsById() throws CustomerNotFoundException//HttpServletRequest request) throws CustomerNotFoundException,InvalidLoginException {
	{
//		HttpSession session = request.getSession(false);
//		if(session != null) 
	//	{
			List<Customer> cus = restcustomerservice.SortCustomerById();
			if(cus.size()!=0) {
				return cus;
			}
			else {
				throw new CustomerNotFoundException();
			}
	/*	}
		else
		{
			throw new InvalidLoginException();
		}
	}*/

	}
}
