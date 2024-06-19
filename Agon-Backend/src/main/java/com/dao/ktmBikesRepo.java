package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.ktm;
import com.model.ktmBikes;

public interface ktmBikesRepo extends JpaRepository<ktmBikes,Integer>{
	ktmBikes findByName(String name);

}
