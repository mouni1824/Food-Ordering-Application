package com.foodapp.model.Entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="foods")
public class Food {
     
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int food_id;

    @Column(name = "food_name")
    private String food_name;

    @Column(name = "food_type")
    private String food_type;

    @Column(name = "food_price")
    private int price;

    @Column(name = "food_rating")
    private int food_rating;

    @Column(name = "cuisine")
    private String cuisine;

    @Lob
    @Column(name = "food_image", columnDefinition = "LONGTEXT")
    private String food_image;

    @ManyToOne
    @JoinColumn(name = "hotel_id")
    @JsonIgnore
    private Restaurant restaurant;

    @Column(name = "hotel_id", insertable = false, updatable = false)
    private int hotel_id;

    @JsonIgnore
    private String hotel_name;

    public int getFood_id() {
        return food_id;
    }

    public void setFood_id(int food_id) {
        this.food_id = food_id;
    }

    public String getFood_name() {
        return food_name;
    }

    public void setFood_name(String food_name) {
        this.food_name = food_name;
    }

    public String getFood_type() {
        return food_type;
    }

    public void setFood_type(String food_type) {
        this.food_type = food_type;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getFood_rating() {
        return food_rating;
    }

    public void setFood_rating(int food_rating) {
        this.food_rating = food_rating;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    public String getFood_image() {
        return food_image;
    }

    public void setFood_image(String food_image) {
        this.food_image = food_image;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    // This setter will set the associated restaurant and manage the hotel_id and hotel_name
    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
        if (restaurant != null) {
            this.hotel_id = restaurant.getHotelid();
            this.hotel_name = restaurant.getHotel_name();
        } else {
            this.hotel_id = 0;
            this.hotel_name = null;
        }
    }

    

    // Getters and setters for hotel_id and hotel_name (you can ignore these setters)

    public int getHotel_id() {
        return hotel_id;
    }

    public void setHotel_id(int hotel_id) {
        // This setter is just added to fulfill your requirement, but it should not be used for setting the hotel_id.
    }

    public String getHotel_name() {
        return hotel_name;
    }

    public void setHotel_name(String hotel_name) {
        // This setter is just added to fulfill your requirement, but it should not be used for setting the hotel_name.
    }
    
    

	public Food(int food_id, String food_name, String food_type, int price, int food_rating, String cuisine,
			String food_image, Restaurant restaurant, int hotel_id, String hotel_name) {
		super();
		this.food_id = food_id;
		this.food_name = food_name;
		this.food_type = food_type;
		this.price = price;
		this.food_rating = food_rating;
		this.cuisine = cuisine;
		this.food_image = food_image;
		this.restaurant = restaurant;
		this.hotel_id = hotel_id;
		this.hotel_name = hotel_name;
	}

	public Food() {
		
	}


	
	
    
    
	
	
	
	
}
