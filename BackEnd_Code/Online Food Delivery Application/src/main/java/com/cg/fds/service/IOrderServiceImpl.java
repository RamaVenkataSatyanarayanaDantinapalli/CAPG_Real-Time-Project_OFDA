package com.cg.fds.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.cg.fds.dto.OrderBasicInfoDTO;
import com.cg.fds.dto.OrderSavePostDTO;
import com.cg.fds.entities.OrderDetails;
import com.cg.fds.entities.Restaurant;

import com.cg.fds.repository.IOrderRepository;
import com.cg.fds.util.OrderDTOConversionClass;
import com.cg.fds.sortings.SortOrdersById;
import com.cg.fds.sortings.SortOrdersByIdDesc;
import com.cg.fds.sortings.SortOrdersByStatus;
import com.cg.fds.sortings.SortOrdersByStatusDesc;
import com.cg.fds.sortings.SortOrdersByDate;
import com.cg.fds.sortings.SortOrdersByDateDesc;
@Service
public class IOrderServiceImpl implements IOrderService{
	
	@Autowired
	IOrderRepository repository;
	
	@Autowired
	OrderDTOConversionClass dtoConversion;

	@Override
	public boolean saveOrder(OrderDetails order) {
		// TODO Auto-generated method stub
		repository.save(order);
		return true;
	}

	@Override
	public boolean deleteOrderById(int orderId) {
		// TODO Auto-generated method stub
		repository.deleteById(orderId);
		return true;
	}

	@Override
	public boolean checkorderById(int orderId) {
		// TODO Auto-generated method stub
		return repository.existsById(orderId);
	}

	@Override
	public OrderDetails getOrderById(int orderId) {
		// TODO Auto-generated method stub
		return repository.findById(orderId).get();
	}

	@Override
	public List<OrderDetails> getAllOrders() {
		// TODO Auto-generated method stub
		List<OrderDetails> list=(List<OrderDetails>) repository.findAll();
		return list;
	}

	@Override
	public OrderDetails updateStatus(int orderId, String status) {
		// TODO Auto-generated method stub
		OrderDetails od=repository.findById(orderId).get();
		od.setOrderStatus(status);
		repository.save(od);
		
		return od;
	}

	@Override
	public List<OrderDetails> getAllOrdersByDate(LocalDate date) {
		// TODO Auto-generated method stub
		List<OrderDetails> od=(List<OrderDetails>) repository.findAll();
		List<OrderDetails> list=new ArrayList<>();
		for (OrderDetails it : od) {
			if(it.getOrderDate().isEqual(date))
			{
				list.add(it);
			}
			
			
		}
		return list;
		
	}

	@Override
	public List<Integer> getAllOrders(String status) {
		// TODO Auto-generated method stub
		
		List<OrderDetails> od=(List<OrderDetails>) repository.findAll();
		List<Integer> list=new ArrayList<>();
		for (OrderDetails it : od) {
			if(it.getOrderStatus().equals(status))
			{
				list.add(it.getOrderId());
			}
		}
		return list;
	}

	@Override
	public OrderBasicInfoDTO addOrders(OrderSavePostDTO orderDto) {
		// TODO Auto-generated method stub
		OrderDetails od=dtoConversion.getOrderDetailsFromPostOrderDTO(orderDto);
		OrderDetails saveOd=repository.save(od);
		OrderBasicInfoDTO dtoObj=dtoConversion.getOrderBasicDto(saveOd);
		return dtoObj;
	}

	@Override
	public List<OrderDetails> SortOrdersById() {
		// TODO Auto-generated method stub
		List<OrderDetails> orders=(List<OrderDetails>) repository.findAll();
		SortOrdersById orderById=new SortOrdersById();
		Collections.sort(orders, orderById);
		return orders;
	}
	
	@Override
	public List<OrderDetails> SortOrdersByIdDesc() {
		// TODO Auto-generated method stub
		List<OrderDetails> orders=(List<OrderDetails>) repository.findAll();
		SortOrdersByIdDesc orderByIdDesc=new SortOrdersByIdDesc();
		Collections.sort(orders, orderByIdDesc);
		return orders;
	}
	
	@Override
	public List<OrderDetails> SortOrdersByStatus() {
		// TODO Auto-generated method stub
		List<OrderDetails> orders=(List<OrderDetails>) repository.findAll();
		SortOrdersByStatus orderByStatus=new SortOrdersByStatus();
		Collections.sort(orders, orderByStatus);
		return orders;
	}
	
	@Override
	public List<OrderDetails> SortOrdersByStatusDesc() {
		// TODO Auto-generated method stub
		List<OrderDetails> orders=(List<OrderDetails>) repository.findAll();
		SortOrdersByStatusDesc orderByStatusDesc=new SortOrdersByStatusDesc();
		Collections.sort(orders, orderByStatusDesc);
		return orders;
	}

	@Override
	public List<OrderDetails> SortOrdersByDate() {
		// TODO Auto-generated method stub
		List<OrderDetails> orders=(List<OrderDetails>) repository.findAll();
		SortOrdersByDate orderByDate=new SortOrdersByDate();
		Collections.sort(orders, orderByDate);
		return orders;
	}
	
	@Override
	public List<OrderDetails> SortOrdersByDateDesc() {
		// TODO Auto-generated method stub
		List<OrderDetails> orders=(List<OrderDetails>) repository.findAll();
		SortOrdersByDateDesc orderByDateDesc=new SortOrdersByDateDesc();
		Collections.sort(orders, orderByDateDesc);
		return orders;
	}

	@Override
	public int countOrdersByDate(LocalDate date) {
		// TODO Auto-generated method stub
		List<OrderDetails> od=(List<OrderDetails>) repository.findAll();
		int count=0;
		for (OrderDetails orderDetails : od) {
			if(orderDetails.getOrderDate().equals(date))
			{
				count++;
				
			}
			
			
		}
		return count;
		
	}

	

	
	

}
