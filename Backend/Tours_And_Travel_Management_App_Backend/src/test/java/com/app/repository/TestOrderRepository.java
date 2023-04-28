//package com.app.repository;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//import java.util.List;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.test.annotation.Rollback;
//
//import com.app.entities.Product;
//
////@DataJpaTest
//@AutoConfigureTestDatabase(replace = Replace.NONE)
//@Rollback(false)
//class TestOrderRepository {
//	@Autowired
//	private OrderRepository orderRepo;
//
//	@Test
//	void testListOrderedProducts() {
//		orderRepo.findAllPurchaseItemsByUserEmail("kiran@gmail.com")
//		.forEach(System.out::println);
//	}
//
//}
