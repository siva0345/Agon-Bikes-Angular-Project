package com.bike;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.cardsDAO;
import com.model.cards;

@RestController
@CrossOrigin(origins = "*")
public class cardsController {
	@Autowired
	private cardsDAO cardsdao;

	@GetMapping("showAllCards") // @RequestMapping(or)@GetMapping
	public List<cards> showAllCards() {
		return cardsdao.getAllCards();
	}

	@RequestMapping("showCardName/{name}")
	public cards showCardByName(@PathVariable("name") String name) {
		return cardsdao.getCardByName(name);
	}

	@PostMapping("registerCard")
	public void registerCard(@RequestBody cards cards) {
		System.out.println("Data Recieved" + cards);
		cardsdao.registerCards(cards);
	}
	@DeleteMapping("deleteCard/{name}")
	public void deleteCardByName(@PathVariable("name") String name) {
	    cardsdao.deleteCardByName(name);
	}

	
	
}
