package com.app.repository;

import java.util.List;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Feedback;


public interface FeedbackRepositry extends JpaRepository<Feedback, Long> {

	Optional<List<Feedback>> findByUserUserId(Long userId);
}
