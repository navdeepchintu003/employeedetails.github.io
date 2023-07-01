package com.employee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.model.User;
import com.employee.service.Userservice;
@CrossOrigin(origins="http://localhost:4200")

@RestController
@RequestMapping("/api/v1/")
public class Usercontroller {
	@Autowired
	private Userservice service;
	@PostMapping("/register")
	@CrossOrigin(origins="http://localhost:4200")
	public User register(@RequestBody User user) throws Exception{
		String tempemail=user.getEmailId();
		User obj=null;
		if(tempemail!=null) {
			
			obj=service.fetchByid(tempemail);
			if(obj!=null) {
				throw new Exception("email with"+tempemail+ "already exits");
			}
		}
		User obj1=null;
		obj1=service.saveuser(user);
		return obj1;	
	}
	@PostMapping("/login")
	public User login(@RequestBody User user1) throws Exception {
		String tempemail1=user1.getEmailId();
		String temppass=user1.getPassword();
		User obj1=null;
		if(tempemail1!=null && temppass!=null) {
			obj1=service.fetch(tempemail1, temppass);
			
		}
		if(obj1==null) {
			throw new Exception("Bad Credentials");
		}
		return obj1;
	}
}
