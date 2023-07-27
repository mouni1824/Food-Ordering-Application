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
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="restaurants")
public class Restaurant {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int hotelid;
	
    @Column(name="hotel_name")
	private String hotel_name;
    
    @Column(name="city")
    private String city;
    
    @Column(name="rating")
    private int rating;
    
    @Column(name="location")
    private String location;
    
    @Lob
    @Column(name="hotel_image", columnDefinition = "LONGTEXT")
    private String hotel_image;
    
    @OneToMany(mappedBy = "restaurant", fetch = FetchType.LAZY)
    private List<Review> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "restaurant", fetch = FetchType.LAZY)
    private List<Food> food = new ArrayList<>();
   
    
    
    

	public int getRating() {
		return rating;
	}




	public void setRating(int rating) {
		this.rating = rating;
	}




	public List<Food> getFood() {
		return food;
	}




	public void setFood(List<Food> food) {
		this.food = food;
	}




	



	public Restaurant(int hotelid, String hotel_name, String city, int rating, String location, String hotel_image,
			List<Review> reviews, List<Food> food) {
		super();
		this.hotelid = hotelid;
		this.hotel_name = hotel_name;
		this.city = city;
		this.rating = rating;
		this.location = location;
		this.hotel_image = hotel_image;
		this.reviews = reviews;
		this.food = food;
	}




	public int getHotelid() {
		return hotelid;
	}




	public void setHotelid(int hotelid) {
		this.hotelid = hotelid;
	}




	public String getHotel_name() {
		return hotel_name;
	}




	public void setHotel_name(String hotel_name) {
		this.hotel_name = hotel_name;
	}




	public String getCity() {
		return city;
	}




	public void setCity(String city) {
		this.city = city;
	}




	public String getLocation() {
		return location;
	}




	public void setLocation(String location) {
		this.location = location;
	}




	public String getHotel_image() {
		return hotel_image;
	}




	public void setHotel_image(String hotel_image) {
		this.hotel_image = hotel_image;
	}




	public List<Review> getReviews() {
		return reviews;
	}




	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}




	public Restaurant() {
		
	}


}
