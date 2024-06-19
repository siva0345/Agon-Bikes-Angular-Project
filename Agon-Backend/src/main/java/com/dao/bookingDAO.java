package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.booking;

@Service
public class bookingDAO {
	@Autowired
	private bookingRepo bookingRepo;
	
	public List<booking> getAllBookings() {
		// TODO Auto-generated method stub
		return bookingRepo.findAll();
	}

	public void registerBooking(booking customer) {
		// TODO Auto-generated method stub
		bookingRepo.save(customer);
	}
}
