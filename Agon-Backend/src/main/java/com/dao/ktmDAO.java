package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.model.ktm;

@Service
public class ktmDAO {
	@Autowired
	private ktmRepo ktmRepo;
	
	public void registerKtmBike(ktm ktm){
		ktmRepo.save(ktm);
	}
	public List<ktm> getAllKtmBikes(){
		return ktmRepo.findAll();
	}
	public ktm getKtmBikeByName(String name){
		return ktmRepo.findByName(name);
	}
}
