package com.neo.security;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.fasterxml.jackson.annotation.JsonTypeInfo.Id;
import com.neo.security.entity.LocalServiceProvider;
import com.neo.security.entity.Services;
import com.neo.security.repository.ProviderRepo;
import com.neo.security.repository.ServicesRepo;
import com.neo.security.repository.UserRepository;

@SpringBootTest
class SecurityApplicationTests {

	
	@Autowired
	private ServicesRepo repository;
	
	@Test
	void contextLoads() {
		
		
		Services services = Services.builder()
				.category("Home")
				.description("Cleaning ")
				.build();
		
		LocalServiceProvider provider = LocalServiceProvider.builder()
				.firstName("mass")
				.lastName("K")
				.username("Shree13")
				.charRole("provider")
				.email("21cse000@skcet.ac.in")
				.password("varshan")
				.gender("Male")
				.dob(new Date(Calendar.YEAR, Calendar.APRIL, 10))
				.address("359, MIG, Mullai Steet")
				.phoneNumber(6363636367L)
				.workingHour("1pm - 3pm")
				.experience(1)
				.category("Home")
				.serviceProviding("Electrician")
				.location("Chennai")
				.build();
	
		
		repository.save(services);
	}

}
