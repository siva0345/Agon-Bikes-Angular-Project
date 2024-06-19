package com.bike;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.BikeServiceDAO;
import com.model.BikeService;

@RestController
@CrossOrigin(origins="*")
public class BikeServiceController{
	@Autowired
	private BikeServiceDAO bikeserviceDao;
	@GetMapping("getAllServices")
	public List<BikeService> getAllServices(){
		List<BikeService> eList=bikeserviceDao.getAllServices();
		System.out.println(eList);
		return eList;
	}
	@PostMapping("registerService")
	public void registerService(@RequestBody BikeService customer){
		System.out.println("Data Received: "+customer);
		bikeserviceDao.registerService(customer);
	}
	
}