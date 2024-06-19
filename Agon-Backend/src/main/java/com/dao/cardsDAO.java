package com.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import com.model.cards;

@Service
public class cardsDAO {
	@Autowired
	private cardsRepo cardsRepo;
	
	public void registerCards(cards cards){
		cardsRepo.save(cards);
	}
	public List<cards> getAllCards(){
		return cardsRepo.findAll();
	}
	public cards getCardByName(String name){
		return cardsRepo.findByName(name);
	}
	@Transactional
	public void deleteCardByName(String name) {
	    cardsRepo.deleteByName(name);
	}

}
