package com.cg.fds.service;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.fds.dto.LoginBasicInfoDTO;
import com.cg.fds.dto.LoginSavePostDTO;
import com.cg.fds.dto.UserDTO;
import com.cg.fds.entities.Item;
import com.cg.fds.entities.Login;
import com.cg.fds.repository.ILoginRepository;
import com.cg.fds.util.LoginDTOConvertionClass;

@Service
public class ILoginServiceImpl implements ILoginService{

	@Autowired
	ILoginRepository repository;
	
	@Autowired
	LoginDTOConvertionClass dtoConvertion;
	@Override
	public Login signIn(Login login) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Login signOut(Login login) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public LoginBasicInfoDTO addUser( LoginSavePostDTO loginDto) {
		
		Login login=dtoConvertion.getLoginFromPostLoginDTO(loginDto);
		Login saveObj=repository.save(login);
		LoginBasicInfoDTO dtObj=dtoConvertion.getLoginBasicDTO(saveObj);
		return dtObj;
	}

	@Override
	public Login updateUser(Login login) {
		
		Login logins=repository.findUserByName(login);
		logins.setUserName(login.getUserName());
		logins.setPassword(login.getPassword());
		logins.setUserRole(login.getUserRole());
		return logins;
	}

	@Override
	public Login removeUser(Login login) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Login getLoginDetails(UserDTO userDto) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Login getUserByUserName(String userName) {
		return repository.getUserByUserName(userName);
	}

}
