package com.cg.fds.util;

import org.springframework.stereotype.Component;

import com.cg.fds.dto.ItemBasicInfoDTO;
import com.cg.fds.dto.ItemSavePostDTO;
import com.cg.fds.entities.Item;

@Component
public class ItemDTOConvertionClass {
	
public ItemBasicInfoDTO getItemBasicDTO(Item item) {
		
		ItemBasicInfoDTO dtoObj=new ItemBasicInfoDTO();
		dtoObj.setItemId(item.getItemId());
		dtoObj.setItemName(item.getItemName());
		dtoObj.setCategory(item.getCategory());
		dtoObj.setCost(item.getCost());
		
		
		return dtoObj;
	}
	
	public Item getItemFromPostItemDTO(ItemSavePostDTO dto) {
		Item item=new Item();
		item.setItemName(dto.getItemName());
		item.setCategory(dto.getCategory());
		item.setCost(dto.getCost());
		
		return item;
	}
}
