package com.employee.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.model.User;
import com.employee.repository.Userrepository;

@Service
public class Userservice {
	@Autowired
	private Userrepository repo;
	public User saveuser(User user) {
		return repo.save(user);
	}
	public User fetchByid(String email) {
		return repo.findByEmailId(email);
		
	}
	public User fetch(String email,String password) {
		return repo.findByEmailIdAndPassword(email, password);
		
	}

}
