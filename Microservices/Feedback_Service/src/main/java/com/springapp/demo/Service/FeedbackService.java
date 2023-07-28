package com.springapp.demo.Service;

import java.util.List;

import com.springapp.demo.Entity.Feedback;

public interface FeedbackService {
	
	List<Feedback> getAllFeedbacks();
	
	Feedback getFeedbackById(Long id);
	
	Boolean deleteFeedback(Long id);
	
	Boolean addFeedback(Feedback feedback);
	
}
