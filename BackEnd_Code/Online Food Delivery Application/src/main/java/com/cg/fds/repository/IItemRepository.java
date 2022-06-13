package com.cg.fds.repository;

import org.springframework.data.repository.CrudRepository;

import com.cg.fds.entities.Item;

public interface IItemRepository extends CrudRepository<Item, Integer> ,ICustomItemRepository{
	
	// findALL , Save, findById , delete 
		// +
		
		// methods from custom Item repository
}
