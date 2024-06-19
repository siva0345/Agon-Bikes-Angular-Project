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

import com.dao.royalEnfieldDAO;
import com.model.royalEnfield;

@RestController
@CrossOrigin(origins = "*")
public class royalEnfieldController {
	@Autowired
	private royalEnfieldDAO royalEnfieldDAO;

	@GetMapping("getAllRoyalEnfieldBikes") // @RequestMapping(or)@GetMapping
	public List<royalEnfield> getAllRoyalEnfieldBikes() {
		return royalEnfieldDAO.getAllRoyalEnfieldBikes();
	}

	@RequestMapping("getRoyalEnfieldBikeByName/{name}")
	public royalEnfield getRoyalEnfieldBikeByName(@PathVariable("name") String name) {
		return royalEnfieldDAO.getRoyalEnfieldBikeByName(name);
	}

	@PostMapping("registerRoyalEnfieldBike")
	public void registerRoyalEnfieldBike(@RequestBody royalEnfield royalEnfield) {
		System.out.println("Data Recieved" + royalEnfield);
		royalEnfieldDAO.registerRoyalEnfieldBike(royalEnfield);
	}
}
