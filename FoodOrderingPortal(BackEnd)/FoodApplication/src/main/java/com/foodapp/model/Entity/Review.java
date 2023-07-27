package com.foodapp.model.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "review")
public class Review {
    
	 @Id
	  private int review_id;

	    @Column(name = "rating")
	    private int rating;

	    @Column(name = "description")
	    private String description;

	    @ManyToOne
	    @JoinColumn(name = "customer_id")
	    @JsonIgnore
	    private Customer customer;

	    @ManyToOne
	    @JoinColumn(name = "hotel_id") // Add this join column to map the hotel_id as a foreign key
	    @JsonIgnore
	    private Restaurant restaurant;
	    
	    

	public Review(int review_id, int rating, String description, Customer customer, Restaurant restaurant) {
			super();
			this.review_id = review_id;
			this.rating = rating;
			this.description = description;
			this.customer = customer;
			this.restaurant = restaurant;
		}



	public int getReview_id() {
			return review_id;
		}



		public void setReview_id(int review_id) {
			this.review_id = review_id;
		}



		public int getRating() {
			return rating;
		}



		public void setRating(int rating) {
			this.rating = rating;
		}



		public String getDescription() {
			return description;
		}



		public void setDescription(String description) {
			this.description = description;
		}



		public Customer getCustomer() {
			return customer;
		}



		public void setCustomer(Customer customer) {
			this.customer = customer;
		}



		public Restaurant getRestaurant() {
			return restaurant;
		}



		public void setRestaurant(Restaurant restaurant) {
			this.restaurant = restaurant;
		}



	public Review() {
    }

}
