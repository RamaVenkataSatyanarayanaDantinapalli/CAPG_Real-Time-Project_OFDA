package com.cg.fds.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.cg.fds.dto.OrderBasicInfoDTO;
import com.cg.fds.dto.OrderSavePostDTO;
import com.cg.fds.entities.OrderDetails;
import com.cg.fds.entities.Restaurant;

@Service
public interface IOrderService {
	
	public boolean saveOrder(OrderDetails order);
	public boolean deleteOrderById(int orderId);
	public boolean checkorderById(int orderId);
	public OrderDetails getOrderById(int orderId);
	public List<OrderDetails> getAllOrders();
	public List<OrderDetails> getAllOrdersByDate(LocalDate date);
	public OrderDetails updateStatus(int orderId,String status);
	
	public List<Integer> getAllOrders(String status);
	public OrderBasicInfoDTO addOrders(OrderSavePostDTO orderDto);
	public List<OrderDetails> SortOrdersById();
	public List<OrderDetails> SortOrdersByIdDesc();
	public List<OrderDetails> SortOrdersByStatus();
	public List<OrderDetails> SortOrdersByStatusDesc();
	public List<OrderDetails> SortOrdersByDate();
	public List<OrderDetails> SortOrdersByDateDesc();
	public int countOrdersByDate(LocalDate date);

}
