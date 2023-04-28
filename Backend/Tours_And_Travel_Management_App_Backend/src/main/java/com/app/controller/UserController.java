package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.dto.ApiResponse;
import com.app.dto.UserDTO;
import com.app.dto.UserLoginDTO;
import com.app.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http://localhost:3000")
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping("/signUp")
	public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userdto) {
		UserDTO createdUser = this.userService.createUser(userdto);
		return new ResponseEntity<UserDTO>(createdUser, HttpStatus.CREATED);
	}
	
	@PostMapping("/signIn")
	public ResponseEntity<UserDTO> authenticateCustomer(@RequestBody UserLoginDTO userdto)
	{
		UserDTO getUserByEmailAndPassword = this.userService.getUserByEmailAndPassword(userdto.getEmail(), userdto.getPassword());
	return ResponseEntity.ok(getUserByEmailAndPassword);
	}

	@PutMapping("/update/{userId}")
	public ResponseEntity<UserDTO> updateUser(@RequestBody UserDTO userdto, @PathVariable Long userId) {
		UserDTO updateUser = this.userService.updateUser(userdto, userId);
		return new ResponseEntity<UserDTO>(updateUser, HttpStatus.OK);
	}

	@DeleteMapping("/delete/{userId}")
	public ResponseEntity<ApiResponse> deleteUser( @PathVariable Long userId) {
		this.userService.deleteUserById(userId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("User is deleted sucessfully", true), HttpStatus.OK);
	}

	@GetMapping("/get/{userId}")
	public ResponseEntity<UserDTO> getUser(@PathVariable Long userId) {
		UserDTO getUser = this.userService.getUserById(userId);
		return new ResponseEntity<UserDTO>(getUser, HttpStatus.OK);
	}

	// for checking purpose only
	@GetMapping("/getall")
	public ResponseEntity<List<UserDTO>> getAllUser() {
		List<UserDTO> getUsers = this.userService.getAllUsers();
		return new ResponseEntity<List<UserDTO>>(getUsers, HttpStatus.OK);
	}
}