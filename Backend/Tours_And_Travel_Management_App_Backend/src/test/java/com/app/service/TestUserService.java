//package com.app.service;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import com.app.entities.Role;
//import com.app.entities.UserEntity;
//
////@SpringBootTest
//class TestUserService {
//	@Autowired
//	private UserService userService;
//
//	@Test
//	void testAddAdminDetails() {
//		UserEntity admin = new UserEntity("Rama", "Sethi", "rama@gmail.com", "abc#1234", Role.ROLE_ADMIN);
//		UserEntity userEntity = userService.addUserDetails(admin);
//		assertEquals(1,userEntity.getId());
//	}
//	@Test
//	void testAddCustomerDetails() {
//		UserEntity customer = new UserEntity("Kiran", "Rao", "kiran@gmail.com", "xyz#1234", Role.ROLE_CUSTOMER);
//		UserEntity userEntity = userService.addUserDetails(customer);
//		assertEquals(2,userEntity.getId());
//	}
//
//}
