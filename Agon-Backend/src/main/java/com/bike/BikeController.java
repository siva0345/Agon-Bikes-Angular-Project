package com.bike;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.dao.BikesDAO;
import com.model.Bike;

import java.util.List;

@RestController
@CrossOrigin(origins="*")
public class BikeController {

	    @Autowired
	    private BikesDAO bikesDao;
	    
	    @GetMapping("getAllCustomers")
	    public List<Bike> getAllCustomers() {
	    	List<Bike> eList = bikesDao.getAllCustomers();
	    	System.out.println(eList);
	        return eList;
	    }
	    
	    @PostMapping("register")
	    public void register(@RequestBody Bike customer) {
	        System.out.println("Data Received: "+customer);
	        bikesDao.register(customer);
	    }
	    
	    @GetMapping("getById/{id}")
	    public Bike getCustById(@PathVariable int id) {
	        return bikesDao.getCustomerById(id);
	    }
	    
	    @GetMapping("login/{email}/{password}")
	    public Bike validateCustomer(@PathVariable String email,@PathVariable String password){
	    	return bikesDao.getValidateCustomer(email,password);
	    }
	    
	    @DeleteMapping("delete/{id}")
	    public Bike deleteCustById(@PathVariable int id) {
	        return bikesDao.deleteCustomerById(id);
	    }
	    
	    @PutMapping("update")
	    public Bike updateCust(@RequestBody Bike employee){
			return bikesDao.updateCustomer(employee);
	    }
	}
