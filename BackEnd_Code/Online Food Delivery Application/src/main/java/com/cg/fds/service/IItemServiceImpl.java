package com.cg.fds.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.fds.dto.ItemBasicInfoDTO;
import com.cg.fds.dto.ItemSavePostDTO;
import com.cg.fds.dto.RestaurantBasicInfoDTO;
import com.cg.fds.entities.Item;
import com.cg.fds.entities.Restaurant;
import com.cg.fds.repository.IItemRepository;
import com.cg.fds.repository.IRestaurantRepository;
import com.cg.fds.sortings.*;
import com.cg.fds.util.ItemDTOConvertionClass;
import com.cg.fds.util.RestaurantDTOConvertionClass;

@Service
public class IItemServiceImpl implements IItemService{

	@Autowired
	IItemRepository repository;
	
	
	
	@Autowired
	IRestaurantRepository rrepository;
	
	@Autowired
	ItemDTOConvertionClass dtoConvertion;
	
	@Override
	public ItemBasicInfoDTO addItem(ItemSavePostDTO itemDto) {
		
        Item item=dtoConvertion.getItemFromPostItemDTO(itemDto);
		Item saveObj=repository.save(item);
		ItemBasicInfoDTO dtoObj=dtoConvertion.getItemBasicDTO(saveObj);
		return dtoObj;
	}

	@Override
	public Item viewItem(int itemId) {
		return repository.findById(itemId).get();
	}


	@Override
	public Item updateItem(Item item) {
		Item items=repository.findById(item.getItemId()).get();
		items.setItemName(item.getItemName());
		items.setCategory(item.getCategory());
		items.setCost(item.getCost());
		repository.save(items);
		return items;
	}

	@Override
	public String removeItem(int itemId) {
		String status="";
		List<Item> list = (List<Item>) repository.findAll();
		for(Item it:list) {
			if(it.getItemId()==itemId) {
				repository.deleteById(itemId);
				status="Success";
			}
			else {
				status="Fali";
			}
		}
		
		return status;
	}

	
	@Override
	public List<Item> viewAllItemsByRestaurantName(String restaurantName) {
		List<Restaurant> restaurant = (List<Restaurant>) rrepository.findAll();
		List<Item> items=new ArrayList<>();
		for(Restaurant res:restaurant) {
			if(res.getRestaurantName().equals(restaurantName)) {
				items.addAll(res.getItemList());
			}
		}
		return items;
	}

	@Override
	public List<Item> viewAllItemsByName(String itemName) {
		return repository.viewAllItemsByName(itemName);
	}
	
	@Override	
	public List<Item> getAllItems() {
		List<Item> list = (List<Item>) repository.findAll();
		return list;
	}

	@Override
	public List<Item> viewAllItemsByCategory(String category) {
		return repository.viewAllItemsByCategory(category);
	}

	@Override
	public List<Item> SortItemsById() {
		List<Item> items = (List<Item>) repository.findAll();
		SortItemById ItemById=new SortItemById();
		Collections.sort(items,ItemById);
		return items;
	}
	
	@Override
	public List<Item> SortItemsByIdDesc() {
		List<Item> items = (List<Item>) repository.findAll();
		SortItemByIdDesc ItemByIdDesc=new SortItemByIdDesc();
		Collections.sort(items,ItemByIdDesc);
		return items;
	}
	
	@Override
	public List<Item> SortItemsByName() {
		List<Item> items = (List<Item>) repository.findAll();
		SortItemByName ItemByName=new SortItemByName();
		Collections.sort(items,ItemByName);
		return items;
	}
	
	@Override
	public List<Item> SortItemsByNameDesc() {
		List<Item> items = (List<Item>) repository.findAll();
		SortItemByNameDesc ItemByNameDesc=new SortItemByNameDesc();
		Collections.sort(items,ItemByNameDesc);
		return items;
	}
	
	public List<Item> SortItemsByCategory() {
		List<Item> items = (List<Item>) repository.findAll();
		SortItemByCategory ItemByName=new SortItemByCategory();
		Collections.sort(items,ItemByName);
		return items;
	}
	
	@Override
	public List<Item> SortItemsByCategoryDesc(){
		List<Item> items = (List<Item>) repository.findAll();
		SortItemByCategoryDesc ItemByNameDesc=new SortItemByCategoryDesc();
		Collections.sort(items,ItemByNameDesc);
		return items;
	}
	
	@Override
	public List<Item> SortItemsByCost() {
		List<Item> items = (List<Item>) repository.findAll();
		SortItemByCost ItemByCost=new SortItemByCost();
		Collections.sort(items,ItemByCost);
		return items;
	}
	
	@Override
	public List<Item> SortItemsByCostDesc(){
		List<Item> items = (List<Item>) repository.findAll();
		SortItemByCostDesc ItemByCostDesc=new SortItemByCostDesc();
		Collections.sort(items,ItemByCostDesc);
		return items;
	}
	

	@Override
	public List<Item> viewAllItemsByCostRange(int cost1, int cost2) {
		// TODO Auto-generated method stub
		return repository.viewAllItemsByCostRange(cost1,cost2);
	}

	@Override
	public List<Item> SortItems(List<Item> items) {
		// TODO Auto-generated method stub
		SortItemByCost ItemByCost=new SortItemByCost();
		Collections.sort(items,ItemByCost);
		return items;
	}

	@Override
	public List<Item> SortItemsDescending(List<Item> items) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
