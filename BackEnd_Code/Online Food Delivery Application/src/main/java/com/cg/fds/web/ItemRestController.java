package com.cg.fds.web;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cg.fds.dto.ItemBasicInfoDTO;
import com.cg.fds.dto.ItemSavePostDTO;

import com.cg.fds.entities.Item;
import com.cg.fds.exceptions.InvalidLoginException;
import com.cg.fds.exceptions.ItemNotFoundException;
import com.cg.fds.service.IItemServiceImpl;

@RestController
@CrossOrigin(origins = {"http://localhost:8084","http://localhost:4200"},allowedHeaders = "*")
@RequestMapping("/app")
@Validated
public class ItemRestController {
	
	@Autowired
	IItemServiceImpl itemservice;
	
	
	@PostMapping("/additem")
	public ResponseEntity<ItemBasicInfoDTO> addItem(@RequestBody @Valid ItemSavePostDTO item) throws InvalidLoginException {
		System.out.println("--->> "+item.getItemName()+" - "+item.getCategory()+" - "+item.getCost());
		ItemBasicInfoDTO dto=itemservice.addItem(item);
		return new ResponseEntity<ItemBasicInfoDTO>(dto,HttpStatus.OK);
	}
	
	@GetMapping("/removeitem/{itemId}")
	public String removeItems(@PathVariable int itemId) throws ItemNotFoundException, InvalidLoginException {		
		String status=itemservice.removeItem(itemId);
		if(status.equals("Success")) {
			return "Item "+itemId+" Removed Successfully.";
		}
		else {
			throw new ItemNotFoundException(itemId);
		}
	}

	
	@PutMapping("/updateitem")
	public String updateItem(@RequestBody Item item) throws ItemNotFoundException, InvalidLoginException {
		Item it=itemservice.updateItem(item);
		if(it!=null) {
			return "Item "+it.getItemName()+" Details Updated Successfully.\n\n"+it+"\n\nPlease Note the Item ID for Further References.";
		}
		else {
			throw new ItemNotFoundException(item.getItemId());
		}
	}
	
	@GetMapping("/viewitembyid/{itemId}")
	public List<Item> viewItem(@PathVariable int itemId) throws ItemNotFoundException, InvalidLoginException {
		Item items= itemservice.viewItem(itemId);
		List<Item> list=new ArrayList<>();
		list.add(items);
		if(list.size()!=0) {
			return list;
		}
		else {
			throw new ItemNotFoundException(itemId);
		}
	}
	
	
	
	@GetMapping("/viewallitems")
	public List<Item> getAllItems() throws ItemNotFoundException, InvalidLoginException {
		//HttpSession session= request.getSession(false);
		//if(session!=null) {
		List<Item> items= itemservice.getAllItems();
		if(items.size()!=0) {
			return items;
		}
		else {
			throw new ItemNotFoundException();
		}
		//}
		//else {
			//throw new InvalidLoginException();
		//}
	}
	
	@GetMapping("/viewitemsbyname/{itemName}")
	public List<Item> viewAllItemsByName(@PathVariable String itemName) throws ItemNotFoundException, InvalidLoginException {
		List<Item> items=itemservice.viewAllItemsByName(itemName);
		if(items.size()!=0) {
			return items;
		}
		else {
			throw new ItemNotFoundException(itemName);
		}	
	}
	
	@GetMapping("/viewitemsbycategory/{category}")
	public List<Item> viewAllItemsByCategory(@PathVariable String category) throws ItemNotFoundException, InvalidLoginException {
		List<Item> items= itemservice.viewAllItemsByCategory(category);
		if(items.size()!=0) {
			return items;
		}
		else {
			throw new ItemNotFoundException(category);
		}	
	}
	
	@GetMapping("/viewitemsbyrestaurant/{restaurantName}")
	public List<Item> viewAllItemsByRestaurant(@PathVariable String restaurantName) throws ItemNotFoundException, InvalidLoginException {
		//HttpSession session= request.getSession(false);
		//if(session!=null) {
		List<Item> items=  itemservice.viewAllItemsByRestaurantName(restaurantName);
		if(items.size()!=0) {
			return items;
		}
		else {
			throw new ItemNotFoundException(restaurantName);
		}
	//}
	//else {
		//throw new InvalidLoginException();
//	}	
	}
	
	@GetMapping("/sortitemsbyid")
	public List<Item> sortItemsById() throws ItemNotFoundException, InvalidLoginException {
		List<Item> items= itemservice.SortItemsById();
		if(items.size()!=0) {
			return items;
		}
		else {
			throw new ItemNotFoundException();
		}
	
	}
	@GetMapping("/sortitemsbyiddesc")
	public List<Item> sortItemsByIdDesc() throws ItemNotFoundException, InvalidLoginException {
		List<Item> items= itemservice.SortItemsByIdDesc();
		if(items.size()!=0) {
			return items;
		}
		else {
			throw new ItemNotFoundException();
		}
	
	}
	
	@GetMapping("/sortitemsbyname")
	public List<Item> SortItemsByName() throws ItemNotFoundException, InvalidLoginException {
		List<Item> items= itemservice.SortItemsByName();
		if(items.size()!=0) {
			return items;
		}
		else {
			throw new ItemNotFoundException();
		}
	}
	
	@GetMapping("/sortitemsbynamedesc")
	public List<Item> SortItemsByNameDesc() throws ItemNotFoundException, InvalidLoginException {
		List<Item> items= itemservice.SortItemsByNameDesc();
		if(items.size()!=0) {
			return items;
		}
		else {
			throw new ItemNotFoundException();
		}
	}
	
	@GetMapping("/sortitemsbycategory")
	public List<Item> SortItemsByCategory() throws ItemNotFoundException, InvalidLoginException {
		List<Item> items= itemservice.SortItemsByCategory();
		if(items.size()!=0) {
			return items;
		}
		else {
			throw new ItemNotFoundException();
		}
	}
	
	@GetMapping("/sortitemsbycategorydesc")
	public List<Item> SortItemsByCategoryDesc() throws ItemNotFoundException, InvalidLoginException {
		List<Item> items= itemservice.SortItemsByCategoryDesc();
		if(items.size()!=0) {
			return items;
		}
		else {
			throw new ItemNotFoundException();
		}
	}
	
	
	@GetMapping("/sortitemsbycost")
	public List<Item> SortItemsByCost() throws ItemNotFoundException, InvalidLoginException {
		List<Item> items= itemservice.SortItemsByCost();
		if(items.size()!=0) {
			return items;
		}
		else {
			throw new ItemNotFoundException();
		}
	}
	
	@GetMapping("/sortitemsbycostdesc")
	public List<Item> SortItemsByCostDesc() throws ItemNotFoundException, InvalidLoginException {
		List<Item> items= itemservice.SortItemsByCostDesc();
		if(items.size()!=0) {
			return items;
		}
		else {
			throw new ItemNotFoundException();
		}
	}
	
	@GetMapping("/getItemsByCostRange")
	public List<Item> getAllItemsByCostRange(int cost1,int cost2) throws ItemNotFoundException, InvalidLoginException {
		List<Item> items= itemservice.viewAllItemsByCostRange(cost1,cost2);
		List<Item> list=itemservice.SortItems(items);
		
		if(list.size()!=0) {
			
			return list ;
		}
		else {
			throw new ItemNotFoundException();
		}
	}

}
