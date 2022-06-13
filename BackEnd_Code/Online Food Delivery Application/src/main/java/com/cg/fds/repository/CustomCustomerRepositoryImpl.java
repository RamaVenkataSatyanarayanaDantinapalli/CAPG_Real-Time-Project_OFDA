package com.cg.fds.repository;

import java.util.List;

import javax.persistence.EntityManager;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.cg.fds.entities.Customer;

@Repository
public class CustomCustomerRepositoryImpl implements CustomCustomerRepository{
	
	@Autowired
	EntityManager entityManager;

	@Override
	public Customer addCustomer(Customer customer) {
		return null;
	}

	@Override
	public Customer updateCustomer(Customer customer) {
		return null;
	}

	@Override
	public Customer removeCustomer(Customer customer) {
		// TODO Auto-generated method stub
		return null;
	}
	@SuppressWarnings({ "unchecked", "deprecation" })
	@Override
	public List<Customer> viewCustomer(int id) {
		
		Session session = entityManager.unwrap(Session.class);
		
		String queryString  = "select * from Customer c where c.customerId=:id";
		
		Query<Customer> query = session.createQuery(queryString);
		query.setInteger("customerId",id);
		
		List<Customer> list = (List<Customer>) query.getResultList();
		
		if(list != null) {
			return list;
		}
		else
		{
			throw new javax.persistence.NoResultException("no customers with given id");
		}
	}
/*
	@Override
	public List<Customer> viewAllCustomer(String restaurantname) {
		Session session = entityManager.unwrap(Session.class);
		
		String queryString  = "select * from Customer c where c.customerId=:";
		
		Query<Customer> query = session.createQuery(queryString);
		query.setInteger("customerId",id);
		
		List<Customer> list = (List<Customer>) query.getResultList();
		
		if(list != null) {
			return list;
		}
		else
		{
			throw new javax.persistence.NoResultException("no customers with given id");
		}
	}
	

	*/

}
