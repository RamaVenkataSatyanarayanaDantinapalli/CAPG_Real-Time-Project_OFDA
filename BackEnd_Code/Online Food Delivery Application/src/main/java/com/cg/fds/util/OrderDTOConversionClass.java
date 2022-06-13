package com.cg.fds.util;

import org.springframework.stereotype.Component;

import com.cg.fds.dto.OrderBasicInfoDTO;
import com.cg.fds.dto.OrderSavePostDTO;
import com.cg.fds.entities.OrderDetails;

@Component
public class OrderDTOConversionClass {
	public OrderBasicInfoDTO getOrderBasicDto(OrderDetails od)
	{
		OrderBasicInfoDTO dtoObj=new OrderBasicInfoDTO();
		//dtoObj.setOrderId(od.getOrderId());
		dtoObj.setOrderStatus(od.getOrderStatus());
		return dtoObj;
		
	}
	public OrderDetails getOrderDetailsFromPostOrderDTO(OrderSavePostDTO dto)
	{
		OrderDetails od=new OrderDetails();
		//od.setOrderId(dto.getOrderId());
		od.setOrderStatus(dto.getOrderStatus());
		return od;
		
	}

}
