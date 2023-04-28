package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.validator.constraints.Length;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@Entity
@ToString
@Table(name = "tourist")
public class Tourist {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "tourist_id")
	private Long touristId;

	@Column(name = "age", nullable = false)
	private Integer age;

	@Enumerated(EnumType.STRING)
	@Column(name = "id_proof", nullable = false)
	private IdProof idProof;

	@Column(name = "id_proof_no", nullable = false)
	private String idProofNo;

	@Length(min = 2, max = 20, message = "Invalid length of tourist name")
	@Column(name = "tourist_name", nullable = false)
	private String touristName;
	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "booking_id")
	private Booking booking;
}
