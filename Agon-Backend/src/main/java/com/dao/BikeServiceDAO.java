package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.model.BikeService;

@Service
public class BikeServiceDAO {
	@Autowired
	private BikeServiceRepo bikeserviceRepo;
	public List<BikeService> getAllServices() {
		// TODO Auto-generated method stub
		return bikeserviceRepo.findAll();
	}

	public void registerService(BikeService customer) {
		// TODO Auto-generated method stub
		bikeserviceRepo.save(customer);
	}
	
	
}