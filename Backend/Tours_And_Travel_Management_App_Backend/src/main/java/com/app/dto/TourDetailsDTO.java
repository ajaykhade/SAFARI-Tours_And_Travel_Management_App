package com.app.dto;

import java.time.LocalDate;

import com.app.entities.TourTypeEnum;
import com.app.entities.TransportationMode;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class TourDetailsDTO {
	private Long tourId;
	private String tourName;
	private String source;
	private String destination;
	private String activities;
	private Double bookingAmount;
	private String tourDetailInfo;
	private LocalDate tourStartDate;
	private LocalDate tourEndDate;
	private Integer maxSeats;
	private TransportationMode transportationMode;
	private TourTypeEnum tourType;
}
