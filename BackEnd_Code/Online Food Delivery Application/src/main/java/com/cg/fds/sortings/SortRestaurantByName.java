package com.cg.fds.sortings;

import java.util.Comparator;

import com.cg.fds.entities.Restaurant;

public class SortRestaurantByName implements Comparator<Restaurant>{
	public int compare(Restaurant r1,Restaurant r2) {
		return r1.getRestaurantName().compareTo(r2.getRestaurantName());
	}
}
