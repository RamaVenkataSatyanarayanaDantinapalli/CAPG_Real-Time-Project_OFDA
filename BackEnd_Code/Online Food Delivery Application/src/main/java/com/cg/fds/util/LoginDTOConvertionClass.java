package com.cg.fds.util;

import org.springframework.stereotype.Component;

import com.cg.fds.dto.LoginBasicInfoDTO;
import com.cg.fds.dto.LoginSavePostDTO;
import com.cg.fds.entities.Login;

@Component
public class LoginDTOConvertionClass {
	
	public LoginBasicInfoDTO getLoginBasicDTO(Login login){
	LoginBasicInfoDTO dtoObj=new LoginBasicInfoDTO();
	dtoObj.setUserName(login.getUserName());
	dtoObj.setPassword(login.getPassword());
	dtoObj.setUserrole(login.getUserRole());
	
	return dtoObj;
	}
	
	public Login getLoginFromPostLoginDTO(LoginSavePostDTO dto) {
		Login login=new Login();
		login.setUserName(dto.getUsername());
		login.setPassword(dto.getPassword());
		login.setUserRole(dto.getUserrole());
		
		return login;
	}
}
