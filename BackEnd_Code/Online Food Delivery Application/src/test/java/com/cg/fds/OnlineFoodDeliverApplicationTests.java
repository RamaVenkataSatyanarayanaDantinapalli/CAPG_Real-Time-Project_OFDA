package com.cg.fds;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;


import com.cg.fds.entities.Item;
import com.cg.fds.service.IItemService;


class OnlineFoodDeliverApplicationTests {
	@Autowired
	private IItemService itemService;
	
	@Test
	public void viewItemByIdTest() {
		Item item=new Item(401,"Pizza","Veg",150.0);
		Mockito.when(itemService.viewItem(401)).thenReturn(item);
		Item testItem=itemService.viewItem(401);
		Assert.assertEquals(item,testItem);
	}
	@Test
	void contextLoads() {
	}

}
