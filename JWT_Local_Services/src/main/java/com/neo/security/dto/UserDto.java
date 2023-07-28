package com.neo.security.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
	
	private String email;
	
	private String firstName;

	private String lastName;

	private String username;

	private String location;

	private String charRole;

	private String gender;

	private Long phoneNumber;

	private Date dob;

	private String address;
	
}
