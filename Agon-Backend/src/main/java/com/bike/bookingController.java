package com.bike;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.bookingDAO;
import com.model.booking;

@RestController
@CrossOrigin(origins="*")
public class bookingController {
 
	 @Autowired
	    private bookingDAO bookingDAO;
	    
	    @GetMapping("getAllBookings")
	    public List<booking> getAllBookings() {
	    	List<booking> eList = bookingDAO.getAllBookings();
	    	System.out.println(eList);
	        return eList;
	    }
	    
	    @PostMapping("registerBooking")
	    public void registerBooking(@RequestBody booking customer) {
	        System.out.println("Data Received: "+customer);
	        bookingDAO.registerBooking(customer);
	    }
	    
}
