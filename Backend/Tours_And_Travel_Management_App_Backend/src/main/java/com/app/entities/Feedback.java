package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "feedback")
public class Feedback {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "feedback_id")
	private Long feedbackId;

	@Column(name = "comment", nullable = false)
	private String comment;

	@Column(name = "email", nullable = false)
	@Email(message = "Invalid Email format")
	private String email;

	@Column(name = "first_name", nullable = false)
	private String firstName;

	@Column(name = "rating")
	@Min(value = 0)
	@Max(value = 5)
	@Digits(fraction = 0, integer = 1, message = "The rating can be given only 0 to 5 ")
	private Integer rating;

	@ManyToOne(fetch= FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;
}
