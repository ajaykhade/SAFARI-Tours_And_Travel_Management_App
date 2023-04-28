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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.TourDetailsDTO;
import com.app.entities.TourTypeEnum;
import com.app.service.TourDetailsService;

@RestController
@RequestMapping("/tourdetails")
@CrossOrigin(origins="http://localhost:3000")
public class TourDetailsController {
	@Autowired
	TourDetailsService tourDetailsService;

	@PostMapping("/create")
	public ResponseEntity<TourDetailsDTO> saveTourDetails(@RequestBody TourDetailsDTO tourDetailsDTO) {
		TourDetailsDTO savedTourDetails = this.tourDetailsService.saveTourDetails(tourDetailsDTO);
		return new ResponseEntity<TourDetailsDTO>(savedTourDetails, HttpStatus.CREATED);
	}

	@PutMapping("/update/{tourDetailId}")
	public ResponseEntity<TourDetailsDTO> updateTourDetails(@RequestBody TourDetailsDTO tourDetailsDTO,
			@PathVariable Long tourDetailId) {
		TourDetailsDTO updatedTourDetails = this.tourDetailsService.updateTourDetails(tourDetailsDTO, tourDetailId);
		return new ResponseEntity<TourDetailsDTO>(updatedTourDetails, HttpStatus.OK);
	}

	@GetMapping("/get/{tourDetailId}")
	public ResponseEntity<TourDetailsDTO> getTourDetailsById(@PathVariable Long tourDetailId) {
		TourDetailsDTO tourDetails = this.tourDetailsService.getTourDetailsById(tourDetailId);
		return new ResponseEntity<TourDetailsDTO>(tourDetails, HttpStatus.OK);
	}

	@GetMapping("/getall")
	public ResponseEntity<List<TourDetailsDTO>> getAllToursDetails() {
		List<TourDetailsDTO> allTourDetails = this.tourDetailsService.getAllToursDetails();
		return new ResponseEntity<List<TourDetailsDTO>>(allTourDetails, HttpStatus.OK);
	}

	@DeleteMapping("/delete/{tourDetailId}")
	public ResponseEntity<ApiResponse> deleteTourDetailsById(@PathVariable Long tourDetailId) {
		this.tourDetailsService.deleteTourDetailsById(tourDetailId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Tour Detail is deleted sucessfully", true),
				HttpStatus.OK);
	}

	@GetMapping("/getbydestination/{destination}")
	public ResponseEntity<List<TourDetailsDTO>> getTourDetailsByDestination(@PathVariable String destination) {
		List<TourDetailsDTO> tourDetailsList = this.tourDetailsService.getToursByDestination(destination);
		return new ResponseEntity<List<TourDetailsDTO>>(tourDetailsList, HttpStatus.OK);
	}
	
	@GetMapping("/getbybudget")
	public ResponseEntity<List<TourDetailsDTO>> getTourDetailsByBudget() {
		List<TourDetailsDTO> tourDetailsList = this.tourDetailsService.findTourByBudget();
		return new ResponseEntity<List<TourDetailsDTO>>(tourDetailsList, HttpStatus.OK);
	}
	
	@GetMapping("/getbyduration")
	public ResponseEntity<List<TourDetailsDTO>> getTourDetailsByDuration() {
		List<TourDetailsDTO> tourDetailsList = this.tourDetailsService.findTourByDuration();
		return new ResponseEntity<List<TourDetailsDTO>>(tourDetailsList, HttpStatus.OK);
	}

	@GetMapping("/getBytourtpe/{tourtype}")
	public ResponseEntity<List<TourDetailsDTO>> getTourDetailsByTourType(@PathVariable String tourtype) {
		List<TourDetailsDTO> tourDetailsList = this.tourDetailsService.getToursByTourType(TourTypeEnum.valueOf(tourtype));
		return new ResponseEntity<List<TourDetailsDTO>>(tourDetailsList, HttpStatus.OK);
	}
}
