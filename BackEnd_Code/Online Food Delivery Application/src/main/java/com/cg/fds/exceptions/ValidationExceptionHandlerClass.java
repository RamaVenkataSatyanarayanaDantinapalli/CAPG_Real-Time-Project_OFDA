package com.cg.fds.exceptions;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ValidationExceptionHandlerClass extends ResponseEntityExceptionHandler {

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException exp,
			HttpHeaders headers, HttpStatus status, WebRequest request) {

		System.out.println("inside validation exception handler class  ");
		Map<String, String> map = new HashMap<>();
		// fieldName, errorMsg

		List<ObjectError> list = exp.getBindingResult().getAllErrors();
		
		System.out.println(" --->> "+list.size());
		// all validations exceptions with fieldname and error render msg
		list.stream().forEach((e) -> {
			String fieldName = ((FieldError) e).getField();
			String errorMsg = e.getDefaultMessage();

			map.put(fieldName, errorMsg);
		});

		return new ResponseEntity<Object>(map, HttpStatus.BAD_REQUEST);
	}

}