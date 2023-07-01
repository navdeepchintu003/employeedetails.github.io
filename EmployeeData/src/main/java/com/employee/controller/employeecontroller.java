package com.employee.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.employee.exception.ResourceNotFoundException;
import com.employee.model.employee;
import com.employee.repo.employeerepo;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins="http://localhost:4200")
public class employeecontroller {
	@Autowired
	private employeerepo repo;
	@GetMapping("/employees")
	public List<employee> getAllEmployees(){
		return repo.findAll();
	}
	@PostMapping("/employees")
	public employee createEmployee(@RequestBody employee emp) {
		return repo.save(emp);
		
	}
	@GetMapping("/employees/{id}")
	public ResponseEntity<employee> getEmployeeById(@PathVariable Long id){
		employee emp=repo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(emp);
	}
	@PutMapping("/employees/{id}")
	public ResponseEntity<employee> updateEmployee(@PathVariable Long id, @RequestBody employee employ){
		employee emp1=repo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee not exist with id :" + id));
		emp1.setFirstName(employ.getFirstName());
		emp1.setLastName(employ.getLastName());
		emp1.setEmailId(employ.getEmailId());
		employee upd=repo.save(emp1);
		return ResponseEntity.ok(upd);
	} 
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		employee employee = repo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		repo.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	

}
