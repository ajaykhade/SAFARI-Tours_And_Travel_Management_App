package com.app.dto;

import com.app.entities.IdProof;

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
public class TouristDTO {

	private Long touristId;
	private Integer age;
	private String touristName;
	private IdProof idProof;
	private String idProofNo;

}
