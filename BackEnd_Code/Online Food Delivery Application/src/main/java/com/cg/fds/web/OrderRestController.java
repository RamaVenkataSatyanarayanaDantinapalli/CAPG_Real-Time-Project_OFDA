package com.cg.fds.web;

import java.time.LocalDate;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cg.fds.dto.OrderBasicInfoDTO;
import com.cg.fds.dto.OrderSavePostDTO;
import com.cg.fds.entities.OrderDetails;
import com.cg.fds.exceptions.InvalidLoginException;
import com.cg.fds.exceptions.OrderNotFoundException;
import com.cg.fds.exceptions.RestaurantNotFoundException;
import com.cg.fds.service.IOrderService;


@RestController
@RequestMapping("/order")
@Validated
@CrossOrigin(origins = {"http://localhost:8084", "http://localhost:4200"},allowedHeaders = "*")
public class OrderRestController {
	@Autowired
	IOrderService service;
	
	
	/*@PostMapping("/dtoOrder")
	public ResponseEntity<OrderBasicInfoDTO> addOrder(@RequestBody @Valid OrderSavePostDTO o)
	{
		
			
		System.out.println(o.getOrderStatus());
		OrderBasicInfoDTO dto=service.addOrders(o);
		return new ResponseEntity<OrderBasicInfoDTO>(dto);
		
	}*/
	
	
	
	@PostMapping("/save")
	public boolean saveOrder(@RequestBody OrderDetails order)
	{
		service.saveOrder(order);
		return true;
	}
	
	@DeleteMapping("/del/{orderId}")
	public boolean removeOrder(@PathVariable int orderId) throws OrderNotFoundException
	{
		
			
		
		OrderDetails od=service.getOrderById(orderId);
		if(od!=null)
		{
			service.deleteOrderById(orderId);
			return true;
		}
		else
		{
			throw new OrderNotFoundException();
		}
	 }
		
	
	@GetMapping("/checkOrder")
	public boolean checkOrderById(@RequestParam int orderId) throws OrderNotFoundException
	{
		
		OrderDetails od=service.getOrderById(orderId);
		if(od!=null)
		{
		return true;
		}
		else
			throw new OrderNotFoundException(orderId);
		
		
	}
	
	@GetMapping("/getOrder")
	public OrderDetails getOrderById(@RequestParam int orderId) throws OrderNotFoundException
	{
		
		OrderDetails od=service.getOrderById(orderId);
		if(od!=null)
		{
			return od;
		}
		else
		{
			throw new OrderNotFoundException(orderId);
		}
		
		
	}
	
	@GetMapping("/orders")
	public List<OrderDetails> getAllOrders()
	{ 
		
	    	
		return service.getAllOrders();
	   
	}
	
	@GetMapping("/dateorders")
	public List<OrderDetails> getAllOrdersByDate(@RequestParam String date)
	{
		
		List<OrderDetails> od=service.getAllOrdersByDate(LocalDate.parse(date));
		return od;
		
	}
	
	
	@GetMapping("/AllOrderStatus")
	public List<Integer> getAllOrdersByStatus(@RequestParam @Valid String status)
	{
		
		List<Integer> od=service.getAllOrders(status);
		return od;
		
	}
	
	@PutMapping("/update/orderId/{orderId}/orderStatus/{status}")
	public String updateOrderStatus(@PathVariable int orderId,@PathVariable @Valid String status)
	{
		
		OrderDetails list= service.updateStatus(orderId, status);
		
		if(list!=null)
		{
			return "updated successfully";
		}
		else
		{
			return "not updated";
		}
		
		
	}
	
	@GetMapping("/sortOrderById")
	public List<OrderDetails> sortOrdersById() throws OrderNotFoundException
	{
		
		List<OrderDetails> orders=service.SortOrdersById();
		if(orders.size()!=0)
		{
			return orders;
		}
		else
		{
			throw new OrderNotFoundException();
		}
		}
	@GetMapping("/sortOrderByIdDesc")
	public List<OrderDetails> sortOrdersByIdDesc() throws OrderNotFoundException
	{
		
		List<OrderDetails> orders=service.SortOrdersByIdDesc();
		if(orders.size()!=0)
		{
			return orders;
		}
		else
		{
			throw new OrderNotFoundException();
		}
		}
	@GetMapping("/sortOrderByStatus")
	public List<OrderDetails> sortOrdersByStatus() throws OrderNotFoundException
	{
		
		List<OrderDetails> orders=service.SortOrdersByStatus();
		if(orders.size()!=0)
		{
			return orders;
		}
		else
		{
			throw new OrderNotFoundException();
		}
		}
	@GetMapping("/sortOrderByStatusDesc")
	public List<OrderDetails> sortOrdersByStatusDesc() throws OrderNotFoundException
	{
		
		List<OrderDetails> orders=service.SortOrdersByStatusDesc();
		if(orders.size()!=0)
		{
			return orders;
		}
		else
		{
			throw new OrderNotFoundException();
		}
		}
		
	
	
	@GetMapping("/sortOrderByDate")
	public List<OrderDetails> sortOrdersByDate()
	{
		
		List<OrderDetails> order=service.SortOrdersByDate();
		if(order.size()!=0)
		{
			return order;
		}
		else
		{
			return null;
		}
		
		
	}
	@GetMapping("/sortOrderByDateDesc")
	public List<OrderDetails> sortOrdersByDateDesc()
	{
		
		List<OrderDetails> order=service.SortOrdersByDateDesc();
		if(order.size()!=0)
		{
			return order;
		}
		else
		{
			return null;
		}
		
		
	}
	
	/*
	 * @GetMapping("/sortOrderByDate")
	public List<OrderDetails> sortOrdersByDate(HttpServletRequest request) throws InvalidLoginException
	{
		HttpSession session= request.getSession(false);
		if(session!=null) {
		List<OrderDetails> order=service.SortOrdersByDate();
		if(order.size()!=0)
		{
			return order;
		}
		else
		{
			return null;
		}
		}
		else {
			throw new InvalidLoginException();
		}
	}
	*/
	@GetMapping("/countOfOrdersByDate")
	public int countOrdersByDate(@RequestParam String date)
	{
		
		return service.countOrdersByDate(LocalDate.parse(date));
		
	}
}
