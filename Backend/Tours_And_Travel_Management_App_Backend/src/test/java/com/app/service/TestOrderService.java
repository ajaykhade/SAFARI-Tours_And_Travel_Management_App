//package com.app.service;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import com.app.dto.OrderDTO;
//import com.app.dto.OrderRespDto;
//import com.app.entities.Order;
//import com.app.entities.Role;
//import com.app.entities.UserEntity;
//
////@SpringBootTest
//class TestOrderService {
//	@Autowired
//	private OrderService orderService;
//
//	@Test
//	void testPlaceOrder() {
//		OrderDTO dto=new OrderDTO(2l, 4l, 450);
//		OrderRespDto order = orderService.placeOrder(dto);
//		//chk order id from db n then edit assertion in the next line
//		assertEquals(2, order.getId());
//	}
//}
