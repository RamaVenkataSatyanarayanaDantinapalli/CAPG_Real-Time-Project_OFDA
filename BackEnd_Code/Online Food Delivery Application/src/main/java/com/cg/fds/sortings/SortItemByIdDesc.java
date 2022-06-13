package com.cg.fds.sortings;

import java.util.Comparator;

import com.cg.fds.entities.Item;

public class SortItemByIdDesc implements Comparator<Item>{
	
	public int compare(Item it1,Item it2) {
		return it2.getItemId()-it1.getItemId();
	}
}
