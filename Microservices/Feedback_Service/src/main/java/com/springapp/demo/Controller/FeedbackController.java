package com.springapp.demo.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springapp.demo.Entity.Feedback;
import com.springapp.demo.Service.FeedbackService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/feedback")
public class FeedbackController {
	
	private final FeedbackService service; 
	
	@GetMapping("/get")
	public List<Feedback> getFeedbacks(){
		return service.getAllFeedbacks();
	}
	
	@GetMapping("/helo")
	public String sample(){
		return "hello from feedback";
	}
	
	@PostMapping("/add") 
	public Boolean postFeedback(@RequestBody Feedback obj){
		return service.addFeedback(obj);
	}	
	
}
