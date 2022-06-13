package com.cg.fds.sortings;

import java.util.Comparator;

import com.cg.fds.entities.Customer;

public class SortCustomerById implements Comparator<Customer>{
	
	public int compare(Customer c1,Customer c2) {
		return c1.getCustomerId()-c2.getCustomerId();
	}

}
