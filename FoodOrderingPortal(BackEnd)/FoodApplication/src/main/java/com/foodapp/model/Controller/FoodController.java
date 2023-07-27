package com.foodapp.model.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.model.Entity.Customer;
import com.foodapp.model.Entity.Food;
import com.foodapp.model.Entity.Restaurant;
import com.foodapp.model.Entity.Review;
import com.foodapp.model.Entity.FoodDTO;
import com.foodapp.model.Service.FoodService;
import com.foodapp.model.Service.RestaurantService;

@RestController
@CrossOrigin("http://localhost:3000")
public class FoodController {
     
	@Autowired 
	 FoodService foodserv;
	@Autowired
    RestaurantService restaurantService;
	

	 
	 @GetMapping("/getFood")
	    public List<Food> getAllFood() {
	        return foodserv.getAllFood();
	    }
	 
	 @GetMapping("/getFood/{id}")
	    public Food getResFood(@PathVariable int id) {
	        return foodserv.getFood(id);
	  }
	 
	 @GetMapping("/getFoodItemsByHotelId/{hotelId}")
		public List<Food> getFoodItemsByHotelId(@PathVariable int hotelId) {
		    return foodserv.getFoodItemsByHotelId(hotelId);
		}
	 

	 @PostMapping("/storeFood")
	    public String saveFood(@RequestBody FoodDTO foodDTO) {
	        // Fetch the Restaurant from the database based on the hotel_id in the FoodDTO
	        Restaurant restaurant = restaurantService.getRestaurantById(foodDTO.getHotel_id());

	        // Create a new Food entity and set its properties from the FoodDTO
	        Food food = new Food();
	        food.setFood_name(foodDTO.getFood_name());
	        food.setFood_type(foodDTO.getFood_type());
	        food.setPrice(foodDTO.getPrice());
	        food.setFood_rating(foodDTO.getFood_rating());
	        food.setCuisine(foodDTO.getCuisine());
	        food.setFood_image(foodDTO.getFood_image());

	        // Set the fetched Restaurant for the Food
	        food.setRestaurant(restaurant);

	        food.setHotel_id(restaurant.getHotelid());
	        food.setHotel_name(restaurant.getHotel_name());

	        // Save the Food
	        foodserv.addFood(food);

	        return "Food added successfully!";
	    }
	 
	 @DeleteMapping("/food/del/{id}") // Updated request mapping pattern
	 public String deleteDetails(@PathVariable("id") int id) {
	     foodserv.deleteFoodById(id);
	     return "deleted";
	 }
	 
}
