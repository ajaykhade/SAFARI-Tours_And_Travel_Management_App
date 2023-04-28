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
//class TestProductRepository {
//	@Autowired
//	private ProductRepository productRepo;
//
//	@Test
//	void testAddProducts() {
//		List<Product> list = List.of(new Product("p11", "desc-1", 100),
//				new Product("p12", "desc-2", 200),
//				new Product("p13", "desc-3", 300),
//				new Product("p14", "desc-4", 400),
//				new Product("p15", "desc-5", 500),
//				new Product("p16", "desc-6", 600));
//		List<Product> list2 = productRepo.saveAll(list);
//		assertEquals(6, list2.size());
//	}
//
//}
