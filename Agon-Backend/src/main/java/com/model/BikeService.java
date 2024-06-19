package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "bikeservice")
public class BikeService {
	@Id
	@GeneratedValue
	private int id;
	private String fullName;
	private String email;
	private String state;
	private String city;
	private String servicedate;
	private String bikemodel;
	public BikeService() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BikeService(int id, String fullName, String email, String state, String city, String servicedate,
			String bikemodel) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.email = email;
		this.state = state;
		this.city = city;
		this.servicedate = servicedate;
		this.bikemodel = bikemodel;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getServicedate() {
		return servicedate;
	}
	public void setServicedate(String servicedate) {
		this.servicedate = servicedate;
	}
	public String getBikemodel() {
		return bikemodel;
	}
	public void setBikemodel(String bikemodel) {
		this.bikemodel = bikemodel;
	}
	@Override
	public String toString() {
		return "BikeService [id=" + id + ", fullName=" + fullName + ", email=" + email + ", state=" + state + ", city="
				+ city + ", servicedate=" + servicedate + ", bikemodel=" + bikemodel + "]";
	}
	
}