package com.foodapp.model.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodapp.model.Entity.Review;
@Repository
public interface ReviewRepo extends JpaRepository<Review, Integer> {

}
