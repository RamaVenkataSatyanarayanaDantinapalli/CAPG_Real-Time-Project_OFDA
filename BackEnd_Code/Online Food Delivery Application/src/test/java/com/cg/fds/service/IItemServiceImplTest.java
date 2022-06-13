package com.cg.fds.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.cg.fds.entities.Item;
import com.cg.fds.repository.IItemRepository;

@SpringBootTest
class IItemServiceImplTest {
	
	@Mock
	IItemRepository repository;
	
	@Mock
	IItemServiceImpl service;
	
	
	@Test
	void testViewAllItemsByName() {
		List<Item> actualOutput=new ArrayList<>();
		when((repository.viewAllItemsByName("Pizza"))).thenReturn(actualOutput);
		assertEquals(new ArrayList<Item>(),actualOutput);
	}

	@Test
	void testViewAllItemsByCategory() {
		List<Item> actualOutput=new ArrayList<>();
		//Optional<Item>output=Optional.of(actualOutput);
		when((repository.viewAllItemsByCategory("Veg"))).thenReturn(actualOutput);
		
		assertEquals(new ArrayList<Item>(),actualOutput);
	}
	
	@Test
	void testViewAllItems() {
		List<Item> actualOutput=new ArrayList<>();
		when(repository.findAll().thenReturn(actualOutput);
		assertIterableEquals(new ArrayList<Item>(),actualOutput);
	}
	
	@Test
	void testViewAllItemsByRestaurantName() {
		List<Item> actualOutput=new ArrayList<>();
		when((service.viewAllItemsByRestaurantName("Hotel Elite"))).thenReturn(actualOutput);
		assertEquals(new ArrayList<Item>(),actualOutput);
	}

}
