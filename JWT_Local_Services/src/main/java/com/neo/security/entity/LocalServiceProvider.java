package com.neo.security.entity;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class LocalServiceProvider {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(nullable = false, unique = true, length = 50)
	private String email;

	@Column(nullable = false, length = 64)
	private String password;

	private String firstName;

	private String lastName;

	private String username;

	private String location;

	private String charRole;

	private String gender;

	private Long phoneNumber;

	private Date dob;
	
	private String address;
	
	private String category;
	
	private String serviceProviding;
	
	private int experience;
	
	private String workingHour;
	
	private int price;
	
	@ManyToOne(cascade = CascadeType.ALL, targetEntity=Services.class)
	private Services services;

}
