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

import com.dao.ktmDAO;
import com.model.ktm;

@RestController
@CrossOrigin(origins = "*")
public class ktmController {
	@Autowired
	private ktmDAO ktmdao;

	@GetMapping("getAllKtmbikes") // @RequestMapping(or)@GetMapping
	public List<ktm> getAllKtmBikes() {
		return ktmdao.getAllKtmBikes();
	}

	@RequestMapping("getKtmBikeByName/{name}")
	public ktm getKtmBikeByName(@PathVariable("name") String name) {
		return ktmdao.getKtmBikeByName(name);
	}

	@PostMapping("registerKtmBike")
	public void registerKtmBike(@RequestBody ktm ktm) {
		System.out.println("Data Recieved" + ktm);
		ktmdao.registerKtmBike(ktm);
	}
}
