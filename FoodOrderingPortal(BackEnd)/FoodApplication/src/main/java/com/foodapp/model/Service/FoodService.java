package com.foodapp.model.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.foodapp.model.Entity.Food;
import com.foodapp.model.Repository.FoodRepo;

@Service
public class FoodService {
     
	@Autowired
	FoodRepo foodrep;

	public List<Food> getAllFood() {
		 return foodrep.findAll();
	}

	public void addFood(Food food) {
        foodrep.save(food);
    }
	
	public Food updateFoodItem(Food f) {
		return foodrep.saveAndFlush(f);
	}

	public void deleteFoodById(int id) {
		foodrep.deleteById(id);
		
	}

	public Food getFood(int id) {
		return foodrep.findById(id).get();
	}
	public List<Food> getFoodItemsByHotelId(int hotelId) {
		return foodrep.findByRestaurantHotelid(hotelId);
	}
	
}
