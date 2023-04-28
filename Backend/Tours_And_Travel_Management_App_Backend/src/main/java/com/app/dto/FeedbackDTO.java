package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class FeedbackDTO {
	private Long feedbackId;
	private String comment;
//	private Long userId;
	private String email;
	private String firstName;
	private Integer rating;
}
