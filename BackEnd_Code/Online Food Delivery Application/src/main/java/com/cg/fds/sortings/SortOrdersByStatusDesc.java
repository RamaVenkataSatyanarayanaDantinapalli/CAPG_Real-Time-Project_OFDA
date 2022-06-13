package com.cg.fds.sortings;
import java.util.Comparator;

import com.cg.fds.entities.OrderDetails;

public class SortOrdersByStatusDesc implements Comparator<OrderDetails> {

	@Override
	public int compare(OrderDetails o1, OrderDetails o2) {
		// TODO Auto-generated method stub
		return o2.getOrderStatus().compareTo(o1.getOrderStatus());
	}

}
