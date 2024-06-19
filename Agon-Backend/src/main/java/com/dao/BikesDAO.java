package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Bike;

@Service
public class BikesDAO {
	
	@Autowired
	private BikesRepo bikesRepo;
	
	public List<Bike> getAllCustomers() {
		// TODO Auto-generated method stub
		return bikesRepo.findAll();
	}

	public void register(Bike customer) {
		// TODO Auto-generated method stub
		bikesRepo.save(customer);
	}

	public Bike getCustomerById(int id) {
		// TODO Auto-generated method stub
		return bikesRepo.findById(id).orElse(new Bike());
	}

	public Bike getValidateCustomer(String email, String password) {
		// TODO Auto-generated method stub
		return bikesRepo.validateCustLogin(email,password);
	}

	public Bike deleteCustomerById(int id) {
		// TODO Auto-generated method stub
		bikesRepo.deleteById(id);
		return null;
	}

	public Bike updateCustomer(Bike customer) {
	    Bike existingCustomer = bikesRepo.findById(customer.getId()).orElse(null);
	    
	    if (existingCustomer != null) {
	        existingCustomer.setEmail(customer.getEmail());
	        existingCustomer.setPassword(customer.getPassword());
	        return bikesRepo.save(existingCustomer);
	    } else {
	        return null;
	    }
	}

	
}
