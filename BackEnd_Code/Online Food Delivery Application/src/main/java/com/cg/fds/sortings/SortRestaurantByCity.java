package com.cg.fds.sortings;

import java.util.Comparator;

import com.cg.fds.entities.Restaurant;

public class SortRestaurantByCity implements Comparator<Restaurant>{
	public int compare(Restaurant r1,Restaurant r2) {
		return r1.getAddress().getCity().compareTo(r2.getAddress().getCity());
	}
}
