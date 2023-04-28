package com.app.service.Impl;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.BookingDTO;
import com.app.dto.TourDetailsDTO;
import com.app.dto.TouristDTO;
import com.app.entities.Booking;
import com.app.entities.TourDetails;
import com.app.entities.Tourist;
import com.app.entities.User;
import com.app.repository.BookingRepositry;
import com.app.repository.TourDetailsRepository;
import com.app.repository.TouristRepository;
import com.app.repository.UserRepositry;
import com.app.service.BookingService;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {
	@Autowired
	ModelMapper modelMapper;
	@Autowired
	BookingRepositry  bookingRepo;

	@Autowired
	UserRepositry userRepo;
	@Autowired
	TourDetailsRepository tourRepo;
	@Autowired
	TouristRepository touristAdd;

//check with react.
	@Override
	public BookingDTO createBooking(BookingDTO bookingdto, Long tourDetailId, Long userId,
			List<TouristDTO> touristDtos) {
		Booking booking = this.modelMapper.map(bookingdto, Booking.class);
		User user = this.userRepo.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("user", "userId", userId));
		TourDetails tour = this.tourRepo.findById(tourDetailId)
				.orElseThrow(() -> new ResourceNotFoundException("tour", "tourDetailId", tourDetailId));

		booking.setUser(user);

		booking.setTourDetails(tour);
			
		Booking createdBooking = bookingRepo.save(booking);

		Long bookingId = createdBooking.getBookingId();

		Booking bookingObj = this.bookingRepo.findById(bookingId).get();

		List<Tourist> tourists = new ArrayList<>();
	
		
		for (TouristDTO tr : touristDtos) {
			System.err.println("In loop +++++");
			Tourist tourist = this.modelMapper.map(tr, Tourist.class);
			touristAdd.save(tourist);
			tourist.setBooking(bookingObj);
			// saving into the tourists List
			System.err.println("adding tourist_------------------------------ -");
			tourists.add(tourist);
			
		}
		System.out.println("---------------------------------------");
		tourists.stream().forEach(tourist->System.err.println(tourist+"Tourist added"));
		System.out.println("---------------------------------------");

		System.err.println("after for loop++++++++++++++++++++++++++++++++++");
		
		
		bookingObj.setTouristList(tourists);
		
		System.err.println("after for loop++++++++++++++++++++++++++++++++++11111111111111111");
		tour.setMaxSeats(tour.getMaxSeats() - createdBooking.getSeatCount());
		System.err.println("after for loop++++++++++++++++++++++++++++++++++ 1222222222222222222222");
		BookingDTO updatedBookingDto = this.modelMapper.map(this.bookingRepo.save(bookingObj), BookingDTO.class);
		return updatedBookingDto;
	}

	@Override
	public void DeleteBookingById(Long bookingId) {
		Booking deleteBooking = this.bookingRepo.findById(bookingId)
				.orElseThrow(() -> new ResourceNotFoundException("booking", "bookingId", bookingId));
		this.bookingRepo.delete(deleteBooking);
	}

	@Override
	public BookingDTO getBookingById(Long bookingId) {
		Booking getBooking = this.bookingRepo.findById(bookingId)
				.orElseThrow(() -> new ResourceNotFoundException("booking", "bookingId", bookingId));
		return this.modelMapper.map(getBooking, BookingDTO.class);
	}

	@Override
	public List<BookingDTO> getAllBooking() {
		List<Booking> getAllBooking = this.bookingRepo.findAll();
		List<BookingDTO> getAllBookingDTO = getAllBooking.stream()
				.map((getbooking) -> this.modelMapper.map(getbooking, BookingDTO.class)).collect(Collectors.toList());
		return getAllBookingDTO;
	}


	@Override
	public List<BookingDTO> getBookingByDuration(LocalDate startDate, LocalDate endDate) {
		List<Booking> getAllBooking=this.bookingRepo.findByBookingDateBetween(startDate, endDate);
		List<BookingDTO> getAllBookingDto = getAllBooking.stream().map((getBooking) -> this.modelMapper.map(getBooking, BookingDTO.class)).collect(Collectors.toList());
		return getAllBookingDto;
	}

	@Override
	public List<BookingDTO> getBooksByTourID(Long tourId) {
		List<Booking> bookings=this.bookingRepo.findByTourDetailsTourId(tourId);
		List<BookingDTO> bookingdto=bookings.stream().map((booking)->this.modelMapper.map(booking,BookingDTO.class)).collect(Collectors.toList());
		return bookingdto;
	}

	@Override
	public List<BookingDTO> getBookingsByUserId(Long userId) {
		List<Booking> bookings=this.bookingRepo.findByUserUserId(userId);
//		List<BookingDTO> bookingdto=bookings.stream()
//				.map(
//					(booking)->this.modelMapper
//						.map(booking,BookingDTO.class)).collect(Collectors.toList()
//				);
		List<BookingDTO> dtoList = new ArrayList<BookingDTO>();
		bookings.forEach(
					booking -> {
						BookingDTO dto = modelMapper.map(booking, BookingDTO.class);
						dto.setTourDetails(modelMapper.map(booking.getTourDetails(), TourDetailsDTO.class));
						dtoList.add(dto);
					}
				);
//		return bookingdto;
		return dtoList;
	}
}