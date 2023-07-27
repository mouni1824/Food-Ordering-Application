package com.foodapp.model.Entity;


public class FoodDTO {
	
	 private int food_id;
	    private String food_name;
	    private String food_type;
	    private int price;
	    private int food_rating;
	    private String cuisine;
	    private String hotel_name;
	    private String food_image;
	    private int hotel_id; // Add this field

	    // Getters and setters
	    
	    
	    
	    public int getFood_id() {
	        return food_id;
	    }

	    public String getHotel_name() {
			return hotel_name;
		}

		public void setHotel_name(String hotel_name) {
			this.hotel_name = hotel_name;
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

	    public int getHotel_id() {
	        return hotel_id;
	    }

	    public void setHotel_id(int hotel_id) {
	        this.hotel_id = hotel_id;
	    }

	    
		

		public FoodDTO(int food_id, String food_name, String food_type, int price, int food_rating, String cuisine,
				String hotel_name, String food_image, int hotel_id) {
			super();
			this.food_id = food_id;
			this.food_name = food_name;
			this.food_type = food_type;
			this.price = price;
			this.food_rating = food_rating;
			this.cuisine = cuisine;
			this.hotel_name = hotel_name;
			this.food_image = food_image;
			this.hotel_id = hotel_id;
		}

		public FoodDTO() {

	    }

}
