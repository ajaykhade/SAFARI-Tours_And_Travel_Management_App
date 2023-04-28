package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.User;

public interface UserRepositry extends JpaRepository<User, Long> {

	public Optional<User> findByEmailAndPassword(String email,String password);
}
