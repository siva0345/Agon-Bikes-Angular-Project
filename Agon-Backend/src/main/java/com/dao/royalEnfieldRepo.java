package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.royalEnfield;

public interface royalEnfieldRepo extends JpaRepository<royalEnfield,Integer>{
	royalEnfield findByName(String name);

}
