package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.cards;

public interface cardsRepo extends JpaRepository<cards,Integer>{
	cards findByName(String name);

	void deleteByName(String name);
}
