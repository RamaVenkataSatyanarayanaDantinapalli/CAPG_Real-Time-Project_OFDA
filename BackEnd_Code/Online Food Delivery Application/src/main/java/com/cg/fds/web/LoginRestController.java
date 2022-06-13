package com.cg.fds.web;

import java.time.LocalTime;
import java.util.ArrayList;
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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.fds.dto.LoginBasicInfoDTO;
import com.cg.fds.dto.LoginSavePostDTO;
import com.cg.fds.dto.RestaurantBasicInfoDTO;
import com.cg.fds.dto.RestaurantSavePostDTO;
import com.cg.fds.dto.UserDTO;
import com.cg.fds.entities.Item;
import com.cg.fds.entities.Login;
import com.cg.fds.exceptions.InvalidLoginException;
import com.cg.fds.exceptions.ItemNotFoundException;
import com.cg.fds.service.ILoginServiceImpl;
import com.cg.fds.service.IRestaurantServiceImpl;

@RestController
@CrossOrigin(origins = {"http://localhost:8084","http://localhost:4200"},allowedHeaders = "*")

@RequestMapping("/app")
@Validated
public class LoginRestController {
	
	@Autowired
	ILoginServiceImpl loginservice;
	
	@PostMapping("/adduser")
	public ResponseEntity<LoginBasicInfoDTO> adduser(@RequestBody @Valid LoginSavePostDTO login) throws InvalidLoginException
	{
		System.out.println("--->> "+login.getUsername()+" - "+login.getPassword()+" - "+login.getUserrole());
		LoginBasicInfoDTO dto=loginservice.addUser(login);
		return new ResponseEntity<LoginBasicInfoDTO>(dto,HttpStatus.OK);
	}	

	
	@GetMapping("/getuserbyusername/{userName}")
	public Login getUserByUserName(@PathVariable String userName) throws InvalidLoginException {
		List<Login> list=new ArrayList<>();
		Login user=loginservice.getUserByUserName(userName);
		list.add(user);
		if(user!=null) {
			return user;
		}
		else {
			throw new InvalidLoginException(userName);
		}	
	}
	
	/*@PostMapping("/adminlogin")
	public String doAdminLogin(@RequestBody UserDTO userDto,HttpServletRequest request) throws InvalidLoginException {
		boolean isUserValidated=false;
		
		if(userDto.getUserName().equals("Satya")&& userDto.getPassword().equals("Satya@6")) {
			isUserValidated=true;
			HttpSession session=request.getSession(true);
			session.setAttribute("userName", userDto.getUserName());
			session.setAttribute("loginTime", LocalTime.now());
			}
			
		if(isUserValidated) {
		
			return "Session Login Successfull";
		}
		else {
			throw new InvalidLoginException(); 
		}
	}
	
	@PostMapping("/userlogin")
	public String doUserLogin(@RequestBody UserDTO userDto,HttpServletRequest request) throws InvalidLoginException {
		boolean isUserValidated=false;
		
		if(userDto.getUserName().equals("Ram")&& userDto.getPassword().equals("Ram@4")) {
			isUserValidated=true;
			HttpSession session=request.getSession(true);
			session.setAttribute("userName", userDto.getUserName());
			session.setAttribute("loginTime", LocalTime.now());
		}
		if(isUserValidated) {
			
			return "Session Login Successfull";
		}
		else {
			throw new InvalidLoginException(); 
		}
	}
	
	@GetMapping("logout")
	public String doLogout(HttpServletRequest req) {
		HttpSession session=req.getSession(false);
		if(session!=null) {
			session.invalidate();
		}
		return "Session Logout";
	}*/
}
