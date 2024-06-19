package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.booking;

public interface bookingRepo extends JpaRepository<booking,Integer>{

}
