package com.foodapp.model.Entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="customer")
public class Customer {
   @Id
   
   private int customer_id;
   
   @Column(name="customer_name")
   private String customer_name;
   
   @Column(name="customer_email")
   private String customer_email;
   
   @Column(name="customer_number")
   private String customer_number;
   
   @Column(name="customer_password")
   private String customer_password;
   
   @Column(name="customer_address")
   private String customer_address;
   
   @Column(name="customer_desc")
   private String customer_desc;
   
   @Column(name="fav_dish")
   private String fav_dish;
   
   @Column(name="fav_hotel")
   private String fav_hotel;
   
   @Column(name="city")
   private String city;
   
   @Column(name="about_me")
   private String about_me;
   
   @OneToMany(mappedBy = "customer", fetch = FetchType.LAZY)
   private List<Review> reviews = new ArrayList<>();

   
   
   
   
   public List<Review> getReviews() {
	return reviews;
}

public void setReviews(List<Review> reviews) {
	this.reviews = reviews;
}

public String getAbout_me() {
	return about_me;
}

public void setAbout_me(String about_me) {
	this.about_me = about_me;
}

public String getCity() {
	return city;
}

public void setCity(String city) {
	this.city = city;
}

@Column(name="face_book")
   private String face_book;
   
   public String getFav_dish() {
	return fav_dish;
}

public void setFav_dish(String fav_dish) {
	this.fav_dish = fav_dish;
}

public String getFav_hotel() {
	return fav_hotel;
}

public void setFav_hotel(String fav_hotel) {
	this.fav_hotel = fav_hotel;
}


public String getFace_book() {
	return face_book;
}

public void setFace_book(String face_book) {
	this.face_book = face_book;
}

@Lob
   @Column(name="customer_image", columnDefinition = "LONGTEXT")
   private String customer_image;

public int getCustomer_id() {
	return customer_id;
}

public void setCustomer_id(int customer_id) {
	this.customer_id = customer_id;
}

public String getCustomer_name() {
	return customer_name;
}

public void setCustomer_name(String customer_name) {
	this.customer_name = customer_name;
}

public String getCustomer_email() {
	return customer_email;
}

public void setCustomer_email(String customer_email) {
	this.customer_email = customer_email;
}

public String getCustomer_number() {
	return customer_number;
}

public void setCustomer_number(String customer_number) {
	this.customer_number = customer_number;
}

public String getCustomer_password() {
	return customer_password;
}

public void setCustomer_password(String customer_password) {
	this.customer_password = customer_password;
}

public String getCustomer_address() {
	return customer_address;
}

public void setCustomer_address(String customer_address) {
	this.customer_address = customer_address;
}

public String getCustomer_desc() {
	return customer_desc;
}

public void setCustomer_desc(String customer_desc) {
	this.customer_desc = customer_desc;
}

public String getCustomer_image() {
	return customer_image;
}

public void setCustomer_image(String customer_image) {
	this.customer_image = customer_image;
}

   





public Customer(int customer_id, String customer_name, String customer_email, String customer_number,
		String customer_password, String customer_address, String customer_desc, String fav_dish, String fav_hotel,
		String city, String about_me, List<Review> reviews, String face_book, String customer_image) {
	super();
	this.customer_id = customer_id;
	this.customer_name = customer_name;
	this.customer_email = customer_email;
	this.customer_number = customer_number;
	this.customer_password = customer_password;
	this.customer_address = customer_address;
	this.customer_desc = customer_desc;
	this.fav_dish = fav_dish;
	this.fav_hotel = fav_hotel;
	this.city = city;
	this.about_me = about_me;
	this.reviews = reviews;
	this.face_book = face_book;
	this.customer_image = customer_image;
}

public Customer() {
	
}
   
   
}
