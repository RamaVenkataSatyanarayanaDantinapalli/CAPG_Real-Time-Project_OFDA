package com.cg.fds.repository;

import java.util.List;

import javax.persistence.EntityManager;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;

import com.cg.fds.entities.OrderDetails;

public class ICustomOrderRepositoryImpl implements ICustomOrderRepository {


	@Autowired
	EntityManager entityManager;

	
	

	@SuppressWarnings({ "unchecked", "deprecation" })
	@Override
	public List<OrderDetails> getAllOrders(String status) {
		Session session=entityManager.unwrap(Session.class);
		String queryString="from order_details od where od.order_status=:status";
		Query<OrderDetails> query=session.createQuery(queryString);
		query.setString("status", status);
		List<OrderDetails> list=query.getResultList();
		if(list!=null)
		{
			return list;
		}
		else
		{
			throw new javax.persistence.NoResultException("data is not available in DB");
		}
		// TODO Auto-generated method stub
		
	}

}
