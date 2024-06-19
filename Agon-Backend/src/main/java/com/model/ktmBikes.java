package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ktmmodels")
public class ktmBikes {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String url;
	private String name;
	private String engine;
	private String performance;
	private String design;
	private String features;
	private String suspensionAndBrakes;
	private String price;
	private String overAll;
	private String engineCapacity;
	private String maxPower;
	private String maxTorque;
	private String mileage;
	private String coolingSystem;
	private String fuelTankCapacity;
	private String brakingSystem;
	private String onlyPrice;

	public ktmBikes() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ktmBikes(int id, String url, String name, String engine, String performance, String design, String features,
			String suspensionAndBrakes, String price, String overAll, String engineCapacity, String maxPower,
			String maxTorque, String mileage, String coolingSystem, String fuelTankCapacity, String brakingSystem,String onlyPrice) {
		super();
		this.id = id;
		this.url = url;
		this.name = name;
		this.engine = engine;
		this.performance = performance;
		this.design = design;
		this.features = features;
		this.suspensionAndBrakes = suspensionAndBrakes;
		this.price = price;
		this.overAll = overAll;
		this.engineCapacity = engineCapacity;
		this.maxPower = maxPower;
		this.maxTorque = maxTorque;
		this.mileage = mileage;
		this.coolingSystem = coolingSystem;
		this.fuelTankCapacity = fuelTankCapacity;
		this.brakingSystem = brakingSystem;
		this.onlyPrice = onlyPrice;

	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEngine() {
		return engine;
	}
	public void setEngine(String engine) {
		this.engine = engine;
	}
	public String getPerformance() {
		return performance;
	}
	public void setPerformance(String performance) {
		this.performance = performance;
	}
	public String getDesign() {
		return design;
	}
	public void setDesign(String design) {
		this.design = design;
	}
	public String getFeatures() {
		return features;
	}
	public void setFeatures(String features) {
		this.features = features;
	}
	public String getSuspensionAndBrakes() {
		return suspensionAndBrakes;
	}
	public void setSuspensionAndBrakes(String suspensionAndBrakes) {
		this.suspensionAndBrakes = suspensionAndBrakes;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getOverAll() {
		return overAll;
	}
	public void setOverAll(String overAll) {
		this.overAll = overAll;
	}
	public String getEngineCapacity() {
		return engineCapacity;
	}
	public void setEngineCapacity(String engineCapacity) {
		this.engineCapacity = engineCapacity;
	}
	public String getMaxPower() {
		return maxPower;
	}
	public void setMaxPower(String maxPower) {
		this.maxPower = maxPower;
	}
	public String getMaxTorque() {
		return maxTorque;
	}
	public void setMaxTorque(String maxTorque) {
		this.maxTorque = maxTorque;
	}
	public String getMileage() {
		return mileage;
	}
	public void setMileage(String mileage) {
		this.mileage = mileage;
	}
	public String getCoolingSystem() {
		return coolingSystem;
	}
	public void setCoolingSystem(String coolingSystem) {
		this.coolingSystem = coolingSystem;
	}
	public String getFuelTankCapacity() {
		return fuelTankCapacity;
	}
	public void setFuelTankCapacity(String fuelTankCapacity) {
		this.fuelTankCapacity = fuelTankCapacity;
	}
	public String getBrakingSystem() {
		return brakingSystem;
	}
	public void setBrakingSystem(String brakingSystem) {
		this.brakingSystem = brakingSystem;
	}
		
	public String getOnlyPrice() {
		return onlyPrice;
	}
	public void setOnlyPrice(String onlyPrice) {
		this.onlyPrice = onlyPrice;
	}
	
	@Override
	public String toString() {
		return "ktmBikes [id=" + id + ", url=" + url + ", name=" + name + ", engine=" + engine + ", performance="
				+ performance + ", design=" + design + ", features=" + features + ", suspensionAndBrakes="
				+ suspensionAndBrakes + ", price=" + price + ", overAll=" + overAll + ", engineCapacity="
				+ engineCapacity + ", maxPower=" + maxPower + ", maxTorque=" + maxTorque + ", mileage=" + mileage
				+ ", coolingSystem=" + coolingSystem + ", fuelTankCapacity=" + fuelTankCapacity + ", brakingSystem="
				+ brakingSystem + "]";
	}

}
