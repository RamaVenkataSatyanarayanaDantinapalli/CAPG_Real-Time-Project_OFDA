package com.cg.fds.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import com.cg.fds.entities.OrderDetails;

@Repository
public interface IOrderRepository extends CrudRepository<OrderDetails, Integer>,ICustomOrderRepository{

	
	

}
