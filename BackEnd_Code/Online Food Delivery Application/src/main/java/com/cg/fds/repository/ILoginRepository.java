package com.cg.fds.repository;

import org.springframework.data.repository.CrudRepository;

import com.cg.fds.entities.Login;
import com.cg.fds.entities.OrderDetails;

public interface ILoginRepository extends CrudRepository<Login, Integer>,ICustomLoginRepository{

}
