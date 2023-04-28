package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.FeedbackDTO;
import com.app.service.FeedbackService;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins="http://localhost:3000")
public class FeedbackController {
	@Autowired
	FeedbackService feedbackService;

	@PostMapping("/create/{userId}")
	public ResponseEntity<FeedbackDTO> createFeedback(@RequestBody FeedbackDTO feedbackdto,@PathVariable Long userId) {
		FeedbackDTO feedbackCreated = this.feedbackService.createfeedback(feedbackdto,userId);
		return new ResponseEntity<FeedbackDTO>(feedbackCreated, HttpStatus.CREATED);
	}

	@DeleteMapping("/delete/{feedbackId}")
	public ResponseEntity<ApiResponse> deleteFeedback(@PathVariable Long feedbackId) {
		this.feedbackService.deletefeedbackById(feedbackId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Feedback is deleted sucessfully", true), HttpStatus.OK);
	}



	@GetMapping("/getall")
	public ResponseEntity<List<FeedbackDTO>> getAllFeedbacks() {
		List<FeedbackDTO> getallFeedbacks = this.feedbackService.getAllFeedback();
		return new ResponseEntity<List<FeedbackDTO>>(getallFeedbacks, HttpStatus.OK);
	}

	@GetMapping("/getByUserId/{userId}")
	public ResponseEntity<List<FeedbackDTO>> getByUserId(@PathVariable Long userId) {
		List<FeedbackDTO> getFeedbacks = this.feedbackService.getByUserID(userId);
		return new ResponseEntity<List<FeedbackDTO>>(getFeedbacks, HttpStatus.OK);
	}
}
