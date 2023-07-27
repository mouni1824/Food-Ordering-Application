package com.foodapp.model.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.model.Entity.Food;

public interface FoodRepo extends JpaRepository<Food, Integer> {

	List<Food> findByRestaurantHotelid(int hotelId);}
