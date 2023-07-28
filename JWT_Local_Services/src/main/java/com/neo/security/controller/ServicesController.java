package com.neo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neo.security.entity.Services;
import com.neo.security.service.LocalService;

@RestController
@CrossOrigin(origins = "http://localhost:5713")
@RequestMapping("/api/v1/service")
public class ServicesController {
	
	@Autowired
	private LocalService service;
	
	@GetMapping("/get")
	public List<Services> getServices(){
		return service.getServices();
	}
	
	@GetMapping("/get/{id}")
	public Services getServiceById(@PathVariable Long id){
		return service.getServiceById(id);
	}
	
	@PostMapping("/add")
	public Boolean addServices(@RequestBody Services obj){
		return service.addService(obj);
	}
	
	@DeleteMapping("/delete/{id}")
	public Boolean deleteService(@PathVariable Long id){
		return service.deleteService(id);
	}
	
}
