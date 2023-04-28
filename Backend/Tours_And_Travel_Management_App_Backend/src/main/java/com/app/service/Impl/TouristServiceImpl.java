package com.app.service.Impl;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.TouristDTO;
import com.app.entities.Tourist;
import com.app.repository.TouristRepository;
import com.app.service.TouristService;

@Service
@Transactional
public class TouristServiceImpl implements TouristService {
	@Autowired
	ModelMapper modelMapper;
	@Autowired
	TouristRepository touristRepository;

	@Override
	public TouristDTO createTourist(TouristDTO touristdto) {
		Tourist tourist = this.modelMapper.map(touristdto, Tourist.class);
		Tourist createdTourist = touristRepository.save(tourist);
		return this.modelMapper.map(createdTourist, TouristDTO.class);
	}
	
	@Override
	public List<TouristDTO> getTouristByBId(Long bookingId) {
		List<Tourist> tourist = this.touristRepository.findByBookingBookingId(bookingId).orElseThrow(() -> new ResourceNotFoundException("tourist", "bookingId", bookingId));
		List<TouristDTO> allTouristDto = tourist.stream().map((tourists) -> this.modelMapper.map(tourists,TouristDTO.class)).collect(Collectors.toList());
		return allTouristDto;
	}
	
	@Override
	public List<TouristDTO> getAllTourist() {
		List<Tourist> tourists = this.touristRepository.findAll();
		List<TouristDTO> allTouristDto = tourists.stream()
				.map((tourist) -> this.modelMapper.map(tourist, TouristDTO.class)).collect(Collectors.toList());
		return allTouristDto;
	}

}
