package com.neo.security.service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.mysql.cj.protocol.Message;
import com.mysql.cj.xdevapi.Result;
import com.neo.security.dto.FeedbackDto;
import com.neo.security.dto.UserDto;
import com.neo.security.entity.User;
import com.neo.security.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import net.bytebuddy.asm.Advice.OffsetMapping.ForOrigin.Renderer.ForReturnTypeName;
import reactor.core.publisher.Mono;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

	private final UserRepository repo;

	private final PasswordEncoder passwordEncoder;

	@Override
	public String addUser(User user) {

		String result = "";

		System.out.println(user.toString());

		Optional<User> obj = repo.findByEmail(user.getEmail());

		System.out.println(obj);

		try {
			if (Objects.nonNull(obj)) {

				String encodedPassword = passwordEncoder.encode(user.getPassword());

				User user1 = User.builder().firstName(user.getFirstName()).lastName(user.getLastName())
						.charRole(user.getCharRole()).username(user.getUsername()).password(encodedPassword)
						.email(user.getEmail()).gender(user.getGender()).dob(user.getDob())
						.phoneNumber(user.getPhoneNumber()).address(user.getAddress()).location(user.getLocation())
						.build();

				return repo.save(user1) != null ? user.toString() : "Error";

			}
		} catch (Exception e) {
			result = "Email Already Exists !!";
		}

		return result;
	}

	@Override
	public List<User> showUsers() {
		return repo.findAll();
	}

	@Override
	public Boolean DeleteUser(int id) {
		if (repo.existsById(id)) {
			repo.deleteById(id);
			return true;
		}
		return false;
	}

	@Override
	public UserDto findUserByEmail(String email) {
		User obj = repo.findByEmail(email).get();

		if (Objects.nonNull(obj)) {
			return UserDto.builder().email(obj.getEmail()).username(obj.getUsername()).firstName(obj.getFirstName())
					.lastName(obj.getLastName()).charRole(obj.getCharRole()).address(obj.getAddress())
					.location(obj.getLocation()).dob(obj.getDob()).gender(obj.getGender())
					.phoneNumber(obj.getPhoneNumber()).build();
		}

		return null;
	}

	public Boolean deleteById(int id) {

		if (repo.existsById(id)) {
			repo.deleteById(id);
			return true;
		}
		return null;
	}

	@Override
	public Boolean addFeedback(FeedbackDto obj) {

		WebClient webClient = WebClient.builder().baseUrl("http://localhost:5555").build();

		Boolean result = webClient.post().uri("/feedback/add").contentType(MediaType.APPLICATION_JSON)
				.bodyValue(obj).retrieve().bodyToMono(Boolean.class).block();
		
		return result;

	}

}
