package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.ktm;

public interface ktmRepo extends JpaRepository<ktm,Integer>{
	ktm findByName(String name);

}
