package com.cg.fds.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.cg.fds.entities.OrderDetails;

@Repository
public interface ICustomOrderRepository {
	
	
	
	public List<OrderDetails> getAllOrders(String status);
	
	

}
