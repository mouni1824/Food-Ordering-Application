package com.foodapp.model.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.model.Entity.Restaurant;

public interface HotelsRepo extends JpaRepository<Restaurant, Integer> {

}
