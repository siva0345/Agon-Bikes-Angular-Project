package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "royalenfield")
public class royalEnfield {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String url;
	private String name;
	private String matter;
	private String route;
	public royalEnfield() {
		super();
		// TODO Auto-generated constructor stub
	}
	public royalEnfield(int id, String url, String name, String matter, String route) {
		super();
		this.id = id;
		this.url = url;
		this.name = name;
		this.matter = matter;
		this.route = route;
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
	public String getMatter() {
		return matter;
	}
	public void setMatter(String matter) {
		this.matter = matter;
	}
	public String getRoute() {
		return route;
	}
	public void setRoute(String route) {
		this.route = route;
	}
	@Override
	public String toString() {
		return "royalEnfield [id=" + id + ", url=" + url + ", name=" + name + ", matter=" + matter + ", route=" + route
				+ "]";
	}
	
}
