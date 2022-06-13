package com.cg.fds.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.cg.fds.entities.OrderDetails;
import com.cg.fds.repository.IOrderRepository;
@SpringBootTest
class IOrderServiceImplTest {
	
	@Mock
	IOrderRepository repository;

	
	
	@Test
	void testGetAllOrders()
	{
		List<OrderDetails> actual=new ArrayList<>();
		when(repository.findAll()).thenReturn(actual);
		
		assertIterableEquals(new ArrayList<OrderDetails>(),actual);
	}
	
	@Test
	void sortOrdersById()
	{
		List<OrderDetails> actual=new ArrayList<>();
		when(repository.findAll()).thenReturn(actual);
		
		assertIterableEquals(new ArrayList<OrderDetails>(),actual);
		
	}

}
