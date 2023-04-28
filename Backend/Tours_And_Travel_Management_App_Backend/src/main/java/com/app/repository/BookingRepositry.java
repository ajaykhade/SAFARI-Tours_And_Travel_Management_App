package com.app.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Booking;

public interface BookingRepositry extends JpaRepository<Booking, Long> {

//	@Query("select b from Booking b WHERE b.booking_date BETWEEN :startDate and :endDate orderBy b.booking_date")
//	public List<Booking> findBookingBybookingDate(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate); 
	
	List<Booking> findByBookingDateBetween(LocalDate startDate, LocalDate endDate);
	
	List<Booking> findByTourDetailsTourId(Long tourId);
	
	List<Booking> findByUserUserId(Long userId);

}

//@Query("SELECT b FROM Booking b WHERE b.bookingDate BETWEEN :startDate AND :endDate ORDER BY b.bookingDate")
//List<Booking> findBookingsBetweenDatesOrderByDate(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);


