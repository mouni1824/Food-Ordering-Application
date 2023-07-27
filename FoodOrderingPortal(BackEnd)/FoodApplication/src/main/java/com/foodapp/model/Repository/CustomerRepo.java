package com.foodapp.model.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.model.Entity.Customer;

public interface CustomerRepo extends JpaRepository<Customer, Integer> {

}
