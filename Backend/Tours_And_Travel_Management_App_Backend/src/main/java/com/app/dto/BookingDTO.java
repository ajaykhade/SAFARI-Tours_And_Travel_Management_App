package com.app.dto;

import java.time.LocalDate;

import com.app.entities.PaymentStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BookingDTO {

	private Long bookingId;
	private LocalDate bookingDate;
	private PaymentStatus paymentStatus;
	private Integer seatCount;
	private Long totalAmount;
//	private TourDetails tourDetails;
	private TourDetailsDTO tourDetails;
}
