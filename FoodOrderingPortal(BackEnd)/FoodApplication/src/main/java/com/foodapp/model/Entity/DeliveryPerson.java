package com.foodapp.model.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="delivery_person")
public class DeliveryPerson {

	@Id
	private int person_id;
	
	@Column(name="username")
	private String username;
	
	@Column(name="password")
	private String password;
	
	@Column(name="email")
	private String email;
	
	@Column(name="availability")
	private String availability;
	
	@Column(name="location")
	private String location;
	
	@Column(name="contact")
	private String contact;
}
