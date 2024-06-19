package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.ktmBikes;

@Service
public class ktmBikesDAO {
	@Autowired
	private ktmBikesRepo ktmBikesRepo;
	
	public void registerKtmModel(ktmBikes ktmBikes){
		ktmBikesRepo.save(ktmBikes);
	}
	public List<ktmBikes> getAllKtmModels(){
		return ktmBikesRepo.findAll();
	}
	public ktmBikes getKtmBikeByModel(String name){
		return ktmBikesRepo.findByName(name);
	}
}
