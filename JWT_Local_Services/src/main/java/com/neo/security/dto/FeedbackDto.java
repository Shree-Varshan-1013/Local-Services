package com.neo.security.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class FeedbackDto {
	
	private Long id;

	private String email;
	
	private String name;
	
	private String comment;
	
}	
