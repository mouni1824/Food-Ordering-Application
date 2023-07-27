package com.foodapp.model.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.model.Entity.Restaurant;

public interface RestaurantRepo extends JpaRepository<Restaurant, Integer> {

}
