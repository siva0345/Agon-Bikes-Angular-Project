package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.model.BikeService;

@Repository
public interface BikeServiceRepo extends JpaRepository<BikeService,Integer>{

}