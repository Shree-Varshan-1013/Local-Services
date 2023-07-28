package com.springapp.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springapp.demo.Entity.Feedback;
import com.springapp.demo.Repository.FeedbackRepo;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class FeedbackServiceImpl implements FeedbackService {
	
	private final FeedbackRepo repo;
	
	@Override
	public List<Feedback> getAllFeedbacks() {
		return repo.findAll();
	}

	@Override
	public Feedback getFeedbackById(Long id) {
		return repo.findById(id).get();
	}

	@Override
	public Boolean deleteFeedback(Long id) {
		if (repo.existsById(id)) {
			repo.deleteById(id);
			return true;
		}
		return false;
	}
	
	@Override
	public Boolean addFeedback(Feedback feedback) {
		return repo.save(feedback) != null ? true : false;
	}
	
}
