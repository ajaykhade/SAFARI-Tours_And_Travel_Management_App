package com.app.service.Impl;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.TourDetailsDTO;
import com.app.entities.TourDetails;
import com.app.entities.TourTypeEnum;
import com.app.repository.TourDetailsRepository;
import com.app.service.TourDetailsService;

@Service
@Transactional
public class TourDetailsServiceImpl implements TourDetailsService {
	@Autowired
	ModelMapper modelMapper;
	@Autowired
	TourDetailsRepository tourDetailsRepository;

	@Override
	public TourDetailsDTO saveTourDetails(TourDetailsDTO tourDetailsDTO) {
		TourDetails tourDetails = this.modelMapper.map(tourDetailsDTO, TourDetails.class);

		TourDetails savedTourDetails = tourDetailsRepository.save(tourDetails);

		return this.modelMapper.map(savedTourDetails, TourDetailsDTO.class);
	}

	@Override
	public TourDetailsDTO updateTourDetails(TourDetailsDTO tourDetailsDTO, Long tourId) {
		TourDetails tourDetails = this.tourDetailsRepository.findById(tourId)
				.orElseThrow(() -> new ResourceNotFoundException("Tour Details", "tourId", tourId));

		tourDetails.setTourName(tourDetailsDTO.getTourName());
		tourDetails.setSource(tourDetailsDTO.getSource());
		tourDetails.setDestination(tourDetailsDTO.getDestination());
		tourDetails.setActivities(tourDetailsDTO.getActivities());
		tourDetails.setBookingAmount(tourDetailsDTO.getBookingAmount());
		tourDetails.setTourDetailInfo(tourDetailsDTO.getTourDetailInfo());
		tourDetails.setTourStartDate(tourDetailsDTO.getTourStartDate());
		tourDetails.setTourEndDate(tourDetailsDTO.getTourEndDate());
		tourDetails.setMaxSeats(tourDetailsDTO.getMaxSeats());
		tourDetails.setTransportationMode(tourDetailsDTO.getTransportationMode());
		tourDetails.setTourType(tourDetailsDTO.getTourType());
		TourDetails updatedTourDetails = this.tourDetailsRepository.save(tourDetails);

		return this.modelMapper.map(updatedTourDetails, TourDetailsDTO.class);
	}

	@Override
	public TourDetailsDTO getTourDetailsById(Long tourId) {
		TourDetails tourDetails = this.tourDetailsRepository.findById(tourId)
				.orElseThrow(() -> new ResourceNotFoundException("Tour Details", "tourId", tourId));

		return this.modelMapper.map(tourDetails, TourDetailsDTO.class);
	}

	@Override
	public List<TourDetailsDTO> getAllToursDetails() {
		List<TourDetails> tourDetails = this.tourDetailsRepository.findAll();
		List<TourDetailsDTO> allTourDetails = tourDetails.stream()
				.map((tour) -> this.modelMapper.map(tour, TourDetailsDTO.class)).collect(Collectors.toList());
		return allTourDetails;
	}

	@Override
	public void deleteTourDetailsById(Long tourId) {
		TourDetails tourDetails = this.tourDetailsRepository.findById(tourId)
				.orElseThrow(() -> new ResourceNotFoundException("Tour Details", "tourId", tourId));
		this.tourDetailsRepository.delete(tourDetails);
	}

	@Override
	public List<TourDetailsDTO> getToursByDestination(String destination) {
		List<TourDetails> tourDetailsList = this.tourDetailsRepository.findByDestination(destination)
				.orElseThrow(() -> new ResourceNotFoundException("Tour Details", "destination", destination));
		
		List<TourDetailsDTO> allTourDetails = tourDetailsList.stream()
				.map((tour) -> this.modelMapper.map(tour, TourDetailsDTO.class)).collect(Collectors.toList());
		
		return allTourDetails;
	}

	@Override
	public List<TourDetailsDTO> findTourByBudget() {
		List<TourDetails> tourDetailsList = this.tourDetailsRepository.findTourByBudget();
		List<TourDetailsDTO> allTourDetails = tourDetailsList.stream()
				.map((tour) -> this.modelMapper.map(tour, TourDetailsDTO.class)).collect(Collectors.toList());
		return allTourDetails;
	}
	
	@Override
	public List<TourDetailsDTO> findTourByDuration() {
		List<TourDetails> tourDetailsList = this.tourDetailsRepository.findByDuration();
		List<TourDetailsDTO> allTourDetails = tourDetailsList.stream()
				.map((tour) -> this.modelMapper.map(tour, TourDetailsDTO.class)).collect(Collectors.toList());
		return allTourDetails;
	}
	
	@Override
	public List<TourDetailsDTO> getToursByTourType(TourTypeEnum tourType) {
		List<TourDetails> tourdetails=this.tourDetailsRepository.findByTourType(tourType).orElseThrow(() -> new ResourceNotFoundException("Tour Details", "tourType", tourType));
		List<TourDetailsDTO> allTourDetails=tourdetails.stream().map(tourdet->this.modelMapper.map(tourdet, TourDetailsDTO.class)).collect(Collectors.toList());
		return allTourDetails;
	}

	
	
}
