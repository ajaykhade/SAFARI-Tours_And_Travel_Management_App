package com.app.service.Impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.FeedbackDTO;
import com.app.entities.Feedback;
import com.app.entities.User;
import com.app.repository.FeedbackRepositry;
import com.app.repository.UserRepositry;
import com.app.service.FeedbackService;

@Service
@Transactional
public class FeedbackServiceImpl implements FeedbackService {
	@Autowired
	ModelMapper modelMapper;
	@Autowired
	FeedbackRepositry feedbackRepositry;
	@Autowired
	UserRepositry userRepo;

	

	@Override
	public void deletefeedbackById(Long feedbackId) {
		Feedback deletefeedback = this.feedbackRepositry.findById(feedbackId)
				.orElseThrow(() -> new ResourceNotFoundException("getfeedback", "feedbackId", feedbackId));
		this.feedbackRepositry.delete(deletefeedback);
	}

	

	@Override
	public FeedbackDTO createfeedback(FeedbackDTO feedbackdto, Long userId) {
		User user = this.userRepo.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("user", "userId", userId));
		
		Feedback feedback = this.modelMapper.map(feedbackdto, Feedback.class);
		feedback.setUser(user);
		Feedback createdfeedback = feedbackRepositry.save(feedback);
		return this.modelMapper.map(createdfeedback, FeedbackDTO.class);
	}

	@Override
	public List<FeedbackDTO> getAllFeedback() {
		List<Feedback> feedbackAll = this.feedbackRepositry.findAll();
		List<FeedbackDTO> feedbackAlldto = feedbackAll.stream().map(fb -> this.modelMapper.map(fb, FeedbackDTO.class))
				.collect(Collectors.toList());
		return feedbackAlldto;
	}

	@Override
	public List<FeedbackDTO> getByUserID(Long userId) {
		List<Feedback> feedbacks = this.feedbackRepositry.findByUserUserId(userId).orElseThrow(() -> new ResourceNotFoundException("Booking", "userId", userId));
		if(feedbacks.isEmpty()) {
			throw new ResourceNotFoundException("feedbacks", "userId", userId);
		}
		
		List<FeedbackDTO> feedbackDto =new ArrayList<>();
		
		for(Feedback f : feedbacks) {
			feedbackDto.add(this.modelMapper.map(f,FeedbackDTO.class));
		}
		
		return feedbackDto;
		
	}
}