package com.app.service;

import java.util.List;

import com.app.dto.FeedbackDTO;

public interface FeedbackService {
	
	void deletefeedbackById(Long feedbackId);

	FeedbackDTO createfeedback(FeedbackDTO feedbackdto, Long userId);

	List<FeedbackDTO> getAllFeedback();
	
	List<FeedbackDTO> getByUserID(Long userId);
	
}
