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
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.model.Entity.Customer;
import com.foodapp.model.Entity.Restaurant;
import com.foodapp.model.Entity.Review;
import com.foodapp.model.Entity.ReviewDTO;
import com.foodapp.model.Service.RestaurantService;
import com.foodapp.model.Service.ReviewService;

@RestController
@CrossOrigin("http://localhost:3000")
public class ReviewController {
    
	@Autowired
	ReviewService revserv;
	
	@Autowired 
	RestaurantService resserv;
	
	
	 @GetMapping("/getRev")
	    public List<Review> getAllReview() {
	        return revserv.getAllReview();
	    }
	    
	    @GetMapping("/getReview/{id}")
	    public Review getReview(@PathVariable int id) {
	        return revserv.getReview(id);
	    }
	    
	    @PostMapping("/storeRev")
	    public String saveDetails(@RequestBody ReviewDTO reviewDTO) {
	        // Create the Review entity and set its properties from the DTO
	        Review review = new Review();
	        review.setRating(reviewDTO.getRating());
	        review.setDescription(reviewDTO.getDescription());

	        // Fetch the Restaurant from the database based on the hotel_id in the DTO
	        Restaurant restaurant = resserv.getRestaurantById(reviewDTO.getHotel_id());

	        // Set the fetched Restaurant for the Review
	        review.setRestaurant(restaurant);

	        // Create a Customer object and set its ID from the DTO
	        Customer customer = new Customer();
	        customer.setCustomer_id(reviewDTO.getCustomer_id());

	        // Set the Customer for the Review
	        review.setCustomer(customer);

	        // Save the Review
	        revserv.saveRevDetails(review);

	        return "data added";
	    }
	            
	    @PutMapping("/updateRev")    
	    public String updatedetails(@RequestBody Review c) {
	        revserv.updateRevItem(c);
	        return "values Updated";
	    }
	            
	    @DeleteMapping("/rev/del/{id}") // Updated request mapping pattern
	    public String deleteDetails(@PathVariable("id") int id) {
	        revserv.deleteRevById(id);
	        return "deleted";
	    }
}
