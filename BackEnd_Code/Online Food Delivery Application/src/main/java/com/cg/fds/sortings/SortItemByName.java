package com.cg.fds.sortings;

import java.util.Comparator;

import com.cg.fds.entities.Item;

public class SortItemByName implements Comparator<Item>{
	
	public int compare(Item it1,Item it2) {
		return it1.getItemName().compareTo(it2.getItemName());
	}
}
