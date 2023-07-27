package com.foodapp.model.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.model.Entity.RestaurantOwner;

public interface RestaurantOwnerRepo extends JpaRepository<RestaurantOwner, Integer> {

}
