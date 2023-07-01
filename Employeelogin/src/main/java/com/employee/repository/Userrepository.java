package com.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee.model.User;
@Repository
public interface Userrepository extends JpaRepository<User, Integer> {
	public User findByEmailId(String email);
	public User findByEmailIdAndPassword(String email, String password);

}
