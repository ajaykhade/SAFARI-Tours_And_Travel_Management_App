package com.app.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ApiResponse {
	private String message;
	private LocalDateTime timestamp;
	private Boolean status;

	public ApiResponse(String message, boolean bool) {
		super();
		this.message = message;
		this.status = bool;
		this.timestamp = LocalDateTime.now();
	}

}
