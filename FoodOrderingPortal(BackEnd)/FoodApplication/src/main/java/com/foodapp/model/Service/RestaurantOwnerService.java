package com.foodapp.model.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodapp.model.Entity.RestaurantOwner;
import com.foodapp.model.Repository.RestaurantOwnerRepo;

@Service
public class RestaurantOwnerService {
	
	@Autowired
	RestaurantOwnerRepo ownrepo;

	public List<RestaurantOwner> getAllOwner() {
	   return ownrepo.findAll(); 
	}

	public RestaurantOwner getRestaurantOwner(int id) {
		return ownrepo.findById(id).get();
	}

	public void saveOwnerDetails(RestaurantOwner c) {
		ownrepo.save(c);
		
	}

	public void updateOwnerItem(RestaurantOwner c) {
		ownrepo.saveAndFlush(c); 
		
	}

	public void deleteOwnerById(int id) {
		ownrepo.deleteById(id);
		
	}

}
