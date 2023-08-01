package com.easyBuy.app.Models;

import com.easyBuy.app.Dao.UserOrSupplier;

public class Supplier implements UserOrSupplier {

	private int supplier_id;

	private String name;

	private String email;

	private String password;

	private Long phoneNumber;

	private String address;

	private String role;

	public int getSupplier_id() {
		return supplier_id;
	}

	public void setSupplier_id(int supplier_id) {
		this.supplier_id = supplier_id;
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

	public Supplier(int supplier_id, String name, String email, String password, Long phoneNumber, String address,
			String role) {
		super();
		this.supplier_id = supplier_id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.role = role;
	}

	public Supplier() {
	}

}
