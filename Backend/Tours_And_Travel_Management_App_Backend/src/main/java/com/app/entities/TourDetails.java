package com.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Min;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "tour_details")
public class TourDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "tour_id")
	private Long tourId;

	@Column(name = "tour_name", nullable = false)
	@Length(min = 2, max = 30, message = "Invalid length of the tour name")
	private String tourName;

	@Column(name = "source", nullable = false)
	@NonNull
	@Length(min = 2, max = 30, message = "Invalid length of the source")
	private String source;
	
	@Column(name = "destination", nullable = false)
	@NonNull
	@Length(min = 2, max = 30, message = "Invalid length of the destination")
	private String destination;

	@NonNull
	@Length(min = 2, max = 30, message = "Invalid length of the tour name")
	private String activities;
	
	@Column(name = "booking_amount", nullable = false)
	@Min(value = 0, message = "The value must be positive")
	private Double bookingAmount;
	
	@Column(name = "tour_detail_info")
	@Length(min = 2, max = 50, message = "Invalid length of the tour description")
	private String tourDetailInfo;
	
	@Column(name = "tour_start_date", nullable = false)
	private LocalDate tourStartDate;

	@Column(name = "tour_end_date", nullable = false)
	// tour end date must be after tour start date validation required
	private LocalDate tourEndDate;
	
	@Column(name = "max_seats")
	@Min(value = 0)
	private Integer maxSeats;
	
	@Column(name = "transportation_mode")
	@Enumerated(EnumType.STRING)
	private TransportationMode transportationMode;

	@Column(name = "tour_type")
	@Enumerated(EnumType.STRING)
	private TourTypeEnum tourType;

	@OneToMany(mappedBy = "tourDetails", cascade = CascadeType.ALL)
	List<Booking> bookingList = new ArrayList<>();
	// {
//	    "tourId":12,
//	    "tourName":"Explore Manali",
//	    "destination":"Manali",
//	    "activities":"Snow Surfing",
//	    "bookingAmount":12000,
//	    "tourDescription":"These tour is for 2 holiday fun",
//	    "tourStartDate":"2023/01/01",
//	    "tourEndDate":"2023/04/01",
//	    "maxSeats":50,
//	    "transportationMode":"BUS"
//	}

}
