package com.neo.security.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neo.security.dto.FeedbackDto;
import com.neo.security.dto.UserDto;
import com.neo.security.entity.User;
import com.neo.security.repository.UserRepository;
import com.neo.security.service.UserServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/v1/user")
public class UserController {

	@Autowired
	private UserServiceImpl serviceImpl;

	@GetMapping("/get")
	public List<User> getUsers() {
		return serviceImpl.showUsers();
	}

	@GetMapping("/get/{email}")
	public UserDto getUserByEmail(@PathVariable String email) {
		return serviceImpl.findUserByEmail(email);
	}

	@DeleteMapping("/delete/{id}")
	public Boolean getUserByEmail(@PathVariable int id) {
		return serviceImpl.deleteById(id);
	}

	@GetMapping("/feedback/add")
	public Boolean getUserFeedback(@RequestBody FeedbackDto feedback) {
		return serviceImpl.addFeedback(feedback);
	}

}
