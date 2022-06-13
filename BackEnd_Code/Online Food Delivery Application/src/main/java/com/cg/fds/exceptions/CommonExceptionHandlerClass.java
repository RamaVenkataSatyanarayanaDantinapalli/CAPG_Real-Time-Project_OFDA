package com.cg.fds.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.cg.fds.exceptions.ErrorTemplate;
import com.cg.fds.exceptions.RestaurantNotFoundException;



@ControllerAdvice
public class CommonExceptionHandlerClass {
	
	@ExceptionHandler
	public ResponseEntity<ErrorTemplate> handlerForRestaurantException(RestaurantNotFoundException exp)
	{
		ErrorTemplate template = new ErrorTemplate();
		
		template.setErrorMsg(exp.getErrorMsg());
		template.setActionType(exp.getActionType());
		
		return new ResponseEntity<ErrorTemplate>(template,HttpStatus.BAD_REQUEST);
	}

	
	@ExceptionHandler
	public ResponseEntity<ErrorTemplate> handlerForItemException(ItemNotFoundException exp)
	{
		ErrorTemplate template = new ErrorTemplate();
		
		template.setErrorMsg(exp.getErrorMsg());
		template.setActionType(exp.getActionType());
		
		return new ResponseEntity<ErrorTemplate>(template,HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler
	public ResponseEntity<ErrorTemplate> handlerForLoginException(InvalidLoginException exp)
	{
		ErrorTemplate template = new ErrorTemplate();
		
		template.setErrorMsg(exp.getErrorMsg());
		template.setActionType(exp.getActionType());
		
		return new ResponseEntity<ErrorTemplate>(template,HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler
	public ResponseEntity<ErrorTemplate> handlerForOrderNotFoundException(OrderNotFoundException exp)
	{
		ErrorTemplate template = new ErrorTemplate();
		
		template.setErrorMsg(exp.getErrorMsg());
		template.setActionType(exp.getActionType());
		
		return new ResponseEntity<ErrorTemplate>(template,HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler
	public ResponseEntity<ErrorTemplate> handlerCustomerNotFoundException(CustomerNotFoundException exp)
	{
		ErrorTemplate template = new ErrorTemplate();
		
		template.setErrorMsg(exp.getErrorMsg());
		template.setActionType(exp.getActionType());
		
		return new ResponseEntity<ErrorTemplate>(template,HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler
	public void handlerForNullPointerException(NullPointerException exp)
	{
		// this code executes whenever Null Pointer Exce raised
	}
}
