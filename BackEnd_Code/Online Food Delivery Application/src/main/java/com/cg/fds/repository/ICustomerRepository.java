package com.cg.fds.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cg.fds.entities.Customer;

@Repository
public interface ICustomerRepository extends CrudRepository<Customer, Integer>, CustomCustomerRepository{

	

}
