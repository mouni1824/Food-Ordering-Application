package com.foodapp.model.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodapp.model.Entity.Restaurant;
import com.foodapp.model.Entity.Review;
import com.foodapp.model.Repository.RestaurantRepo;
import com.foodapp.model.Repository.ReviewRepo;

@Service
public class ReviewService {

	@Autowired
    private ReviewRepo reviewRepository;
	

    // Method to save the review
    public void saveRevDetails(Review review) {
        reviewRepository.save(review);
    }

    // Method to update the review
    public void updateRevItem(Review review) {
        reviewRepository.save(review);
    }

    // Method to delete a review by ID
    public void deleteRevById(int id) {
        reviewRepository.deleteById(id);
    }

    // Method to get all reviews
    public List<Review> getAllReview() {
        return reviewRepository.findAll();
    }

    // Method to get a review by ID
    public Review getReview(int id) {
        return reviewRepository.findById(id).orElse(null);
    }

	

}
