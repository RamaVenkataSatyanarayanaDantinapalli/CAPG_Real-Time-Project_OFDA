package com.cg.fds.sortings;
import java.util.Comparator;

import com.cg.fds.entities.OrderDetails;

public class SortOrdersById implements Comparator<OrderDetails> {

	@Override
	public int compare(OrderDetails o1, OrderDetails o2) {
		// TODO Auto-generated method stub
		return o1.getOrderId()-o2.getOrderId();
	}

}
