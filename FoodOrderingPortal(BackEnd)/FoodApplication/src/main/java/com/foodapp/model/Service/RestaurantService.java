package com.foodapp.model.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodapp.model.Entity.Food;
import com.foodapp.model.Entity.Restaurant;
import com.foodapp.model.Entity.Review;
import com.foodapp.model.Repository.RestaurantRepo;

@Service
public class RestaurantService {


	@Autowired
	RestaurantRepo resrepo;
	
	
	
	public List<Restaurant> getAllRestaurant() {
		return resrepo.findAll();
	}

	public Restaurant getRestaurant(int id) {
		return resrepo.findById(id).get();
	}

	public void saveResDetails(Restaurant c) {
		resrepo.save(c);
		
	}

	public void updateResItem(Restaurant c) {
		resrepo.saveAndFlush(c);
		
	}

	public void deleteResById(int id) {
		resrepo.deleteById(id);
		
	}

	 public Restaurant getRestaurantById(int id) {
	        return resrepo.findById(id).orElse(null);
	    }

	

}
