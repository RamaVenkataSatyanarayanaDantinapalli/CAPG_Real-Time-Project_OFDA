package com.cg.fds.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.cg.fds.entities.Customer;
import com.cg.fds.repository.ICustomerRepository;

@SpringBootTest
class ICustomerServiceImplTest {
	
	@Mock
	ICustomerRepository repository;
	
	@Test
	void testViewAllCustomer() {
		List<Customer> actualOutput = new ArrayList<>();
		when(repository.findAll()).thenReturn(actualOutput);
		assertEquals(new ArrayList<Customer>(), actualOutput);
	}


}
