package com.foodapp.model.Entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="restaurant_owner")
public class RestaurantOwner {

	@Id
	private int owner_id;
	
	@Column(name="owner_name")
	private String owner_name;
	
	@Column(name="owner_email")
	private String owner_email;
	
	@Column(name="owner_number")
	private String owner_number;
	
	@Column(name="owner_password")
	private String owner_password;
	
		
	
	public int getOwner_id() {
		return owner_id;
	}

	public void setOwner_id(int owner_id) {
		this.owner_id = owner_id;
	}

	public String getOwner_name() {
		return owner_name;
	}

	public void setOwner_name(String owner_name) {
		this.owner_name = owner_name;
	}

	public String getOwner_email() {
		return owner_email;
	}

	public void setOwner_email(String owner_email) {
		this.owner_email = owner_email;
	}

	public String getOwner_number() {
		return owner_number;
	}

	public void setOwner_number(String owner_number) {
		this.owner_number = owner_number;
	}

	public String getOwner_password() {
		return owner_password;
	}

	public void setOwner_password(String owner_password) {
		this.owner_password = owner_password;
	}

	
	
	public RestaurantOwner(int owner_id, String owner_name, String owner_email, String owner_number,
			String owner_password) {
		super();
		this.owner_id = owner_id;
		this.owner_name = owner_name;
		this.owner_email = owner_email;
		this.owner_number = owner_number;
		this.owner_password = owner_password;
		
	}

	public RestaurantOwner() {
		
	}
	

	
	
}
