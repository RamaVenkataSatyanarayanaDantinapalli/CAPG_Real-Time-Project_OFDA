package com.cg.fds.repository;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;

import com.cg.fds.entities.Item;
import com.cg.fds.entities.Restaurant;

public class ICustomItemRepositoryImpl implements ICustomItemRepository {
	
	@Autowired
	EntityManager entityManager;
	

	@Override
	public List<Item> viewAllItemsByName(String itemName) {
		Session session = entityManager.unwrap(Session.class);
		// select * from AccountTable where cityName = 'dffd';
		String queryString = "from Item it where it.itemName=:itemName";
		
		Query<Item> query = session.createQuery(queryString);
		query.setString("itemName", itemName);
		
		List<Item>  list = (List<Item>) query.getResultList();
		
		// code to fetch data from DB using JPQL
		
		if(list != null)
		{
			return list;
		}
		else
		{
			throw new javax.persistence.NoResultException("Item Name Records Not In The DB");
		}
	}
	
	@Override
	public List<Item> viewAllItemsByCategory(String category) {
		Session session = entityManager.unwrap(Session.class);
		// select * from AccountTable where cityName = 'dffd';
		String queryString = "from Item it where it.category=:category";
		
		Query<Item> query = session.createQuery(queryString);
		query.setString("category",category);
		
		List<Item>  list = (List<Item>) query.getResultList();
		
		// code to fetch data from DB using JPQL
		
		if(list != null)
		{
			return list;
		}
		else
		{
			throw new javax.persistence.NoResultException("Item Name Records Not In The DB");
		}
	}

	@Override
	public List<Item> viewAllItemsByCostRange(int cost1, int cost2) {
		Session session = entityManager.unwrap(Session.class);
		// select * from AccountTable where cityName = 'dffd';
		String queryString = "from Item it where it.cost>=:cost1 and it.cost<=:cost2";
		
		Query<Item> query = session.createQuery(queryString);
		query.setInteger("cost1", cost1);
		query.setInteger("cost2", cost2);
		
		List<Item>  list = (List<Item>) query.getResultList();
		
		// code to fetch data from DB using JPQL
		
		if(list != null)
		{
			return list;
		}
		else
		{
			throw new javax.persistence.NoResultException("Item Name Records Not In The DB");
		}
	}
	
}
