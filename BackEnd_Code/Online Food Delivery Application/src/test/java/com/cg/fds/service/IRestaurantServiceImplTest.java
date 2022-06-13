package com.cg.fds.service;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import static org.mockito.Mockito.when;
import com.cg.fds.entities.Restaurant;
import com.cg.fds.repository.IRestaurantRepository;

@SpringBootTest
class IRestaurantServiceImplTest {
	
	@Mock
	IRestaurantRepository repository;

	@Test
	void testViewRestaurantByName() {
		List<Restaurant> actualOutput=new ArrayList<>();
		when(repository.viewRestaurantByName("Hotel Elite")).thenReturn(actualOutput);
		assertEquals(new ArrayList<Restaurant>(),actualOutput);
	}

	@Test
	void testViewRestaurantByPincode() {
		List<Restaurant> actualOutput=new ArrayList<>();
		when(repository.viewRestaurantByPincode(522302)).thenReturn(actualOutput);
		assertEquals(new ArrayList<Restaurant>(),actualOutput);
	}

	@Test
	void testViewRestaurantByCity() {
		List<Restaurant> actualOutput=new ArrayList<>();
		when(repository.viewRestaurantByCity("Vijayawada")).thenReturn(actualOutput);
		assertEquals(new ArrayList<Restaurant>(),actualOutput);
	}
	
	@Test
	void testviewAllRestaurants() {
		List<Restaurant> actualOutput=new ArrayList<>();
		when(repository.findAll()).thenReturn(actualOutput);
		assertEquals(new ArrayList<Restaurant>(),actualOutput);
	}

}
