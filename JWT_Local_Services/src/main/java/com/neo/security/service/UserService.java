package com.neo.security.service;

import java.util.List;

import com.neo.security.dto.FeedbackDto;
import com.neo.security.dto.UserDto;
import com.neo.security.entity.User;

public interface UserService {
	
	String addUser(User user);
	
	List<User> showUsers();
	
	UserDto findUserByEmail(String email);
	
	Boolean addFeedback(FeedbackDto obj);

	Boolean DeleteUser(int id);

}
