package com.app.service;

import java.util.List;

import com.app.dto.UserDTO;

public interface UserService {
	UserDTO createUser(UserDTO user);

	UserDTO updateUser(UserDTO user, Long userId);

	UserDTO getUserByEmailAndPassword(String email, String password);
	
	UserDTO getUserById(Long userId);

	List<UserDTO> getAllUsers();

	void deleteUserById(Long ID);
}
