package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.royalEnfield;

@Service
public class royalEnfieldDAO {
	@Autowired
	private royalEnfieldRepo royalEnfieldRepo;
	
	public void registerRoyalEnfieldBike(royalEnfield royalEnfield){
		royalEnfieldRepo.save(royalEnfield);
	}
	public List<royalEnfield> getAllRoyalEnfieldBikes(){
		return royalEnfieldRepo.findAll();
	}
	public royalEnfield getRoyalEnfieldBikeByName(String name){
		return royalEnfieldRepo.findByName(name);
	}
}
