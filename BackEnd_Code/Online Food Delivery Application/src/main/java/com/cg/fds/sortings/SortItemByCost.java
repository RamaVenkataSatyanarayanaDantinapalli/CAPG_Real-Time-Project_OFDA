package com.cg.fds.sortings;

import java.util.Comparator;

import com.cg.fds.entities.Item;

public class SortItemByCost implements Comparator<Item>{
	
	public int compare(Item it1,Item it2) {
		return (int) (it1.getCost()-it2.getCost());
	}
}
