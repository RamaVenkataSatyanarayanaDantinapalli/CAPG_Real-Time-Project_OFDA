package com.cg.fds.sortings;

import java.util.Comparator;

import com.cg.fds.entities.Restaurant;

public class SortRestaurantById implements Comparator<Restaurant>{
	
	public int compare(Restaurant r1,Restaurant r2) {
		return r1.getRestaurantId()-r2.getRestaurantId();
	}
}
