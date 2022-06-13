package com.cg.fds.repository;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.cg.fds.entities.Restaurant;
@Repository
public class ICustomRestaurantRepositoryImpl implements ICustomRestaurantRepository{
	
	@Autowired
	EntityManager entityManager;
	
	public ICustomRestaurantRepositoryImpl(EntityManager entityManager) {
		this.entityManager=entityManager;
	}
	@Override
	public List<Restaurant> viewRestaurantByName(String restaurantName) {
		Session session = entityManager.unwrap(Session.class);
		// select * from AccountTable where cityName = 'dffd';
		String queryString = "from Restaurant r where r.restaurantName=:restaurantName";
		
		Query<Restaurant> query = session.createQuery(queryString);
		query.setString("restaurantName", restaurantName);
		
		List<Restaurant>  list = (List<Restaurant>) query.getResultList();
		
		// code to fetch data from DB using JPQL
		
		if(list != null)
		{
			return list;
		}
		else
		{
			throw new javax.persistence.NoResultException("Restaurant Name Records Not In The DB");
		}
	}

	@Override
	public List<Restaurant> viewAllRestaurants() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Restaurant> viewRestaurantByPincode(int pincode) {
		Session session = entityManager.unwrap(Session.class);
		// select * from AccountTable where cityName = 'dffd';
		String queryString = "from Restaurant r where r.address.pincode=:pincode";
		
		Query<Restaurant> query = session.createQuery(queryString);
		query.setInteger("pincode", pincode);
		
		List<Restaurant>  list = (List<Restaurant>) query.getResultList();
		
		// code to fetch data from DB using JPQL
		
		if(list != null)
		{
			return list;
		}
		else
		{
			throw new javax.persistence.NoResultException("Restaurant Name Records Not In The DB");
		}
	}

@Override
public List<Restaurant> viewRestaurantByCity(String city) {
	Session session = entityManager.unwrap(Session.class);
	// select * from AccountTable where cityName = 'dffd';
	String queryString = "from Restaurant r where r.address.city=:city";
	
	Query<Restaurant> query = session.createQuery(queryString);
	query.setString("city", city);
	
	List<Restaurant>  list = (List<Restaurant>) query.getResultList();
	
	// code to fetch data from DB using JPQL
	
	if(list != null)
	{
		return list;
	}
	else
	{
		throw new javax.persistence.NoResultException("Restaurant Name Records Not In The DB");
	}
}


@Override
public void removeById(int id) {
	/*Restaurant restaurant=entityManager.find(Restaurant.class,id);
	if(restaurant!=null) {
		try {
			entityManager.getTransaction().begin();
			restaurant.getItemList().forEach(item->{
				item.get;
			});
		}
	}*/
	
}}
