package com.app.dto;

import java.time.LocalDate;

import com.app.entities.Role;

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
public class UserDTO {
	private Long userId;
	private String email;
	private String password;
	private Role role;
	private String firstName;
	private String lastName;
	private LocalDate dob;
	private String address;
	private Long phoneNo;
}
