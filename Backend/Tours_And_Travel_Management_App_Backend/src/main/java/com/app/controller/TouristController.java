package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.TouristDTO;
import com.app.service.TouristService;

@RestController
@RequestMapping("/tourist")
@CrossOrigin(origins="http://localhost:3000")
public class TouristController {
	@Autowired
	TouristService touristService;

	@PostMapping("/create")
	public ResponseEntity<TouristDTO> createTourist(@RequestBody TouristDTO touristdto) {
		TouristDTO createdTourist = this.touristService.createTourist(touristdto);
		return new ResponseEntity<TouristDTO>(createdTourist, HttpStatus.CREATED);
	}
	@GetMapping("/getAllTouristByBookingId/{bookingId}")
	public ResponseEntity<List<TouristDTO>> getTouristByBookingId(@PathVariable Long bookingId) {
		List<TouristDTO>getTourist = this.touristService.getTouristByBId(bookingId);
		return new ResponseEntity<List<TouristDTO>>(getTourist, HttpStatus.OK);
	}

	@GetMapping("/getall")
	public ResponseEntity<List<TouristDTO>> getAllTourist() {
		List<TouristDTO> getTourist = this.touristService.getAllTourist();
		return new ResponseEntity<List<TouristDTO>>(getTourist, HttpStatus.OK);
	}
	
}
