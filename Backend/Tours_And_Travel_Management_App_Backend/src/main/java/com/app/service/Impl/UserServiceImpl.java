package com.app.service.Impl;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.UserDTO;
import com.app.entities.User;
import com.app.repository.UserRepositry;
import com.app.service.UserService;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	ModelMapper modelMapper;
	@Autowired
	UserRepositry userRepositry;

	@Override
	public UserDTO createUser(UserDTO userdto) {
		User user = this.modelMapper.map(userdto, User.class);
		User createdUser = userRepositry.save(user);
		return this.modelMapper.map(createdUser, UserDTO.class);
	}

	@Override
	public UserDTO updateUser(UserDTO userdto, Long userId) {
		User user = this.userRepositry.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("user", "userid", userId));
		user.setEmail(userdto.getEmail());
		user.setPassword(userdto.getPassword());
		user.setFirstName(userdto.getFirstName());
		user.setLastName(userdto.getLastName());
		user.setAddress(userdto.getAddress());
		user.setDob(userdto.getDob());
//		user.setPassword(userdto.getPassword());
		user.setPhoneNo(userdto.getPhoneNo());
		User updatedUser = this.userRepositry.save(user);

		return this.modelMapper.map(updatedUser, UserDTO.class);
	}

	@Override
	public UserDTO getUserById(Long userId) {
		User user = this.userRepositry.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("user", "userid", userId));
		return this.modelMapper.map(user, UserDTO.class);
	}

	@Override
	public List<UserDTO> getAllUsers() {
		List<User> users = this.userRepositry.findAll();
		List<UserDTO> allUserDto = users.stream().map((user) -> this.modelMapper.map(user, UserDTO.class))
				.collect(Collectors.toList());
		return allUserDto;
	}

	@Override
	public void deleteUserById(Long userId) {
		User user = this.userRepositry.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("user", "userid", userId));
		this.userRepositry.delete(user);
	}

	@Override
	public UserDTO getUserByEmailAndPassword(String email, String password) {
		User user = this.userRepositry.findByEmailAndPassword(email, password).orElseThrow(()-> new ResourceNotFoundException("User", "email", email));
		
		return this.modelMapper.map(user, UserDTO.class);
	}
}
