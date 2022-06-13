package com.cg.fds.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cg.fds.dto.LoginBasicInfoDTO;
import com.cg.fds.dto.LoginSavePostDTO;
import com.cg.fds.dto.UserDTO;
import com.cg.fds.entities.Login;
@Service
public interface ILoginService {
	public LoginBasicInfoDTO addUser( LoginSavePostDTO login);
	public Login updateUser(Login login);
	public Login removeUser(Login login);
	public Login signIn(Login login);
	public Login signOut(Login login);
	public Login getLoginDetails(UserDTO userDto);
	public Login getUserByUserName(String userName);
}
