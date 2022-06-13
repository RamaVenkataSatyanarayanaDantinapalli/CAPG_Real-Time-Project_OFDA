package com.cg.fds.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.cg.fds.entities.Login;
@Repository
public interface ICustomLoginRepository {
	public Login signIn(Login login);
	public Login signOut(Login login);
	public Login findUserByName(Login login);
	public Login getUserByUserName(String userName);
}
