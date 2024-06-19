package com.bike;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.ktmBikesDAO;
import com.model.ktmBikes;

@RestController
@CrossOrigin(origins = "*")
public class ktmBikesController {
	@Autowired
	private ktmBikesDAO ktmBikesDAO;

	@GetMapping("getAllKtmModels") // @RequestMapping(or)@GetMapping
	public List<ktmBikes> getAllKtmModels() {
		return ktmBikesDAO.getAllKtmModels();
	}

	@RequestMapping("getKtmBikeByModel/{name}")
	public ktmBikes getKtmBikeByName(@PathVariable("name") String name) {
		return ktmBikesDAO.getKtmBikeByModel(name);
	}

	@PostMapping("registerKtmModel")
	public void registerKtmBike(@RequestBody ktmBikes ktmBikes) {
		System.out.println("Data Recieved" + ktmBikes);
		ktmBikesDAO.registerKtmModel(ktmBikes);
	}
}
