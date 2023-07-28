package com.springapp.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springapp.demo.Entity.Feedback;

public interface FeedbackRepo extends JpaRepository<Feedback, Long>{
	
}
