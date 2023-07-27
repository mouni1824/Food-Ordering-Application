package com.foodapp.model.Entity;

public class ReviewDTO {
	    private int rating;
	    private String description;
	    private int customer_id;
	    private int hotel_id;
	    
		public int getHotel_id() {
			return hotel_id;
		}
		public void setHotel_id(int hotel_id) {
			this.hotel_id = hotel_id;
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
		public int getCustomer_id() {
			return customer_id;
		}
		public void setCustomer_id(int customer_id) {
			this.customer_id = customer_id;
		}
		
	    public ReviewDTO(int rating, String description, int customer_id, int hotel_id) {
			super();
			this.rating = rating;
			this.description = description;
			this.customer_id = customer_id;
			this.hotel_id = hotel_id;
		}
		public ReviewDTO() {
	    	
	    }
		
}
