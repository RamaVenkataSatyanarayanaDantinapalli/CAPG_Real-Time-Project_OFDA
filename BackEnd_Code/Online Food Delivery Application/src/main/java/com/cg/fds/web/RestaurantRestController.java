package com.cg.fds.web;

import java.util.List;

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

import com.cg.fds.dto.RestaurantBasicInfoDTO;
import com.cg.fds.dto.RestaurantSavePostDTO;
import com.cg.fds.entities.Restaurant;
import com.cg.fds.exceptions.InvalidLoginException;
import com.cg.fds.exceptions.RestaurantNotFoundException;
import com.cg.fds.service.IRestaurantServiceImpl;

@RestController
@CrossOrigin(origins = {"http://localhost:8084","http://localhost:4200"},allowedHeaders = "*")
@RequestMapping("/app")
@Validated
public class RestaurantRestController {
	
	@Autowired
	IRestaurantServiceImpl restservice;
	
	@PostMapping("/addrestaurant")
	public ResponseEntity<RestaurantBasicInfoDTO> addRestaurant(@RequestBody @Valid RestaurantSavePostDTO r) throws InvalidLoginException
	{
		
		
		System.out.println("--->> "+r.getRestaurantName()+" - "+r.getManagerName()+" - "+r.getContactNumber());
		RestaurantBasicInfoDTO dto=restservice.addRestaurant(r);
		return new ResponseEntity<RestaurantBasicInfoDTO>(dto,HttpStatus.OK);
		
	}
	
	@PutMapping("/updaterestaurant")
	public String updateRestaurant(@RequestBody Restaurant restarant) throws InvalidLoginException{

		Restaurant res=restservice.updateRestaurant(restarant);
		if(res!=null) {
			return "Restaurant "+res.getRestaurantName()+" Details Updated Successfully\n\n"+res+"\n\nPlease Note the Restaurant ID for Further References.";
		}
		else {
			return "Restaurant "+res.getRestaurantName()+" Details Not Updated Successfully";
		}
	}
	
	@GetMapping("/removerestaurant/{restaurantId}")
	public String removeRestaurant(@PathVariable int restaurantId) throws RestaurantNotFoundException, InvalidLoginException
	{
		String status=restservice.removeRestaurant(restaurantId);
		if(status.equals("Success")) {
			return "Restaurant "+restaurantId+" Removed Successfully";
		}
		else {
			throw new RestaurantNotFoundException(restaurantId);
		}	
	}
	
	@GetMapping("/viewallrestaurants")
	public List<Restaurant> getAllRestaurant() throws RestaurantNotFoundException, InvalidLoginException
	{
		//HttpSession session= request.getSession(false);
		//if(session!=null) {
				List<Restaurant> res= restservice.viewAllRestaurants();
		if(res.size()!=0) {
			return res;
		}
		else {
			throw new RestaurantNotFoundException();
		}
		//}
			//else {
				//throw new InvalidLoginException();
			//}
		}

	
	@GetMapping("/viewrestaurantbyid/{restaurantId}")
	public List<Restaurant> viewRestaurant(@PathVariable int restaurantId) throws RestaurantNotFoundException, InvalidLoginException
	{
		
		
		List<Restaurant> res=restservice.viewRestaurantByID(restaurantId);
		if(res.size()!=0) {
			return res;
		}
		else {
		throw new RestaurantNotFoundException(restaurantId);
		}
	
	}
	
	@GetMapping("/viewrestaurantbyname/{restaurantName}")
	public List<Restaurant> viewRestaurantByName(@PathVariable String restaurantName) throws RestaurantNotFoundException, InvalidLoginException
	{
		
		List<Restaurant> res=restservice.viewRestaurantByName(restaurantName);
		if(res.size()!=0) {
			return res;
		}
		throw new RestaurantNotFoundException(restaurantName);
	
}
	@GetMapping("/viewrestaurantsbypincode/{pincode}")
	public List<Restaurant> viewRestaurantByPincode(@PathVariable int pincode) throws RestaurantNotFoundException, InvalidLoginException
	{
		List<Restaurant> res=restservice.viewRestaurantByPincode(pincode);
		
		if(res.size()!=0) {
			return res;
		}
		throw new RestaurantNotFoundException(pincode);
		}
		
	
	@GetMapping("/viewrestaurantsbycity/{cityName}")
	public List<Restaurant> viewRestaurantByCity(@PathVariable String cityName) throws RestaurantNotFoundException, InvalidLoginException
	{
		
		List<Restaurant> res=restservice.viewRestaurantByCity(cityName);
		if(res.size()!=0) {
			return res;
		}
		else {
			throw new RestaurantNotFoundException(cityName);
		}
		
	}
	
	@GetMapping("/viewrestaurantsbyitemname/{ItemName}")
	public List<Restaurant> viewRestaurantByItemName(@PathVariable String ItemName) throws RestaurantNotFoundException, InvalidLoginException
	{
		List<Restaurant> res=restservice.viewRestaurantByItemName(ItemName);
		if(res.size()!=0) {
			return res;
		}
		else {
			throw new RestaurantNotFoundException(ItemName);
		}
		
	}
	
	
	
	@GetMapping("/sortrestaurantsbyid")
	public List<Restaurant> sortItemsById() throws RestaurantNotFoundException, InvalidLoginException {
		
		List<Restaurant> res = restservice.SortRestaurantById();
		if(res.size()!=0) {
			return res;
		}
		else {
			throw new RestaurantNotFoundException();
		}
	}
	
	@GetMapping("/sortrestaurantsbyname")
	public List<Restaurant> SortItemsByName() throws RestaurantNotFoundException, InvalidLoginException {
		
		List<Restaurant> res = restservice.SortRestaurantByName();
		if(res.size()!=0) {
			return res;
		}
		else {
			throw new RestaurantNotFoundException();
		}
	}
	
	@GetMapping("/sortrestaurantsbycity")
	public List<Restaurant> SortItemsByCost() throws RestaurantNotFoundException, InvalidLoginException{
		List<Restaurant> res = restservice.SortRestaurantByCity();
		if(res.size()!=0) {
			return res;
		}
		else {
			throw new RestaurantNotFoundException();
		}
	}
	
}
