package com.cg.fds.sortings;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Comparator;

import com.cg.fds.entities.OrderDetails;

public class SortOrdersByDateDesc implements Comparator<OrderDetails>
{
	@Override
	public int compare(OrderDetails o1, OrderDetails o2) {
		// TODO Auto-generated method stub
		
		return o2.getOrderDate().compareTo(o1.getOrderDate());
	}

}
