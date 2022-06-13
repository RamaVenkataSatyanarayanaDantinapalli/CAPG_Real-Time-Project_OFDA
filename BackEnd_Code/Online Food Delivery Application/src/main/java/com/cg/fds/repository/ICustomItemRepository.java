package com.cg.fds.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.cg.fds.entities.Item;
import com.cg.fds.entities.Restaurant;

@Repository
public interface ICustomItemRepository {
	
	public List<Item> viewAllItemsByName(String name);
	public List<Item> viewAllItemsByCategory(String category);
	public List<Item> viewAllItemsByCostRange(int cost1, int cost2);

}
