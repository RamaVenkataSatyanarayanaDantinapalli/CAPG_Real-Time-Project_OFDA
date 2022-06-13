package com.cg.fds.sortings;

import java.util.Comparator;

import com.cg.fds.entities.Item;

public class SortItemByCostDesc implements Comparator<Item>{
	
	public int compare(Item it1,Item it2) {
		return (int) (it2.getCost()-it1.getCost());
	}
}
