package com.easyBuy.app.Models;

import java.util.List;

import com.easyBuy.app.Dao.UserOrSupplier;

public class User implements UserOrSupplier{

	private String username;

	private String name;

	private String email;

	private String password;

	private Long phoneNumber;
	
	private String dob;
	
	private String address;
	
	private String role;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public User(String username, String name, String email, String password, Long phoneNumber, String dob,
			String address, String role) {
		super();
		this.username = username;
		this.name = name;
		this.email = email;
		this.password = password;
		this.phoneNumber = phoneNumber;
		this.dob = dob;
		this.address = address;
		this.role = role;
	}

	public User() {}

	@Override
	public String toString() {
		return "User [username=" + username + ", name=" + name + ", email=" + email + ", password=" + password
				+ ", phoneNumber=" + phoneNumber + ", dob=" + dob + ", address=" + address + ", role=" + role + "]";
	}
	
	

}
