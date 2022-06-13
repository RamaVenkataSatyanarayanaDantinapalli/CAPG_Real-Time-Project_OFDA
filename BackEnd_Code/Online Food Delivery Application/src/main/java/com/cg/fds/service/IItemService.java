package com.cg.fds.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cg.fds.dto.ItemBasicInfoDTO;
import com.cg.fds.dto.ItemSavePostDTO;
import com.cg.fds.entities.Item;
import com.cg.fds.entities.Restaurant;
@Service
public interface IItemService {
	public ItemBasicInfoDTO addItem(ItemSavePostDTO itemDto);
	public Item viewItem(int itemIdid);
	public Item updateItem(Item item);
	public List<Item> getAllItems();
	public String removeItem(int itemId);
	public List<Item> viewAllItemsByRestaurantName(String restaurantName);
	public List<Item> viewAllItemsByCategory(String category);
	public List<Item> viewAllItemsByName(String itemName);
	public List<Item>viewAllItemsByCostRange(int cost1,int cost2);
	public List<Item> SortItemsById();
	public List<Item> SortItemsByIdDesc();
	public List<Item> SortItemsByName();
	public List<Item> SortItemsByNameDesc();
	public List<Item> SortItemsByCategory();
	public List<Item> SortItemsByCategoryDesc();
	public List<Item> SortItemsByCost();
	public List<Item> SortItemsByCostDesc();
	public List<Item> SortItems(List<Item> items);
	public List<Item> SortItemsDescending(List<Item> items);
	
}
