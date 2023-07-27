package com.foodapp.model.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.model.Entity.Admin;

public interface AdminRepo extends JpaRepository<Admin, Integer> {

}
