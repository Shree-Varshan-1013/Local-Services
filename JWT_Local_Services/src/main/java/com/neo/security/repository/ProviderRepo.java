package com.neo.security.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.web.authentication.rememberme.RememberMeAuthenticationException;

import com.neo.security.entity.LocalServiceProvider;

public interface ProviderRepo extends JpaRepository<LocalServiceProvider, Integer>{

	@Query(value = "SELECT u FROM LocalServiceProvider u WHERE u.category=?1 and u.location=?2")
	List<LocalServiceProvider> findByCategoryAndLocation(String category, String location);
	
	Optional<LocalServiceProvider> findByEmail(String email);

}
