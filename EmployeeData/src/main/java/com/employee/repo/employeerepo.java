package com.employee.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee.model.employee;

@Repository

public interface employeerepo extends JpaRepository<employee, Long>{

}
