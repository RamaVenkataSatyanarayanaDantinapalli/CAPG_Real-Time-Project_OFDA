package com.cg.fds.sortings;

import java.util.Comparator;
import java.text.SimpleDateFormat;
import java.text.DateFormat;


import com.cg.fds.entities.OrderDetails;

public class SortOrdersByDate implements Comparator<OrderDetails>
{
	@Override
	public int compare(OrderDetails o1, OrderDetails o2) {
		return o1.getOrderDate().compareTo(o2.getOrderDate());
	}

}
