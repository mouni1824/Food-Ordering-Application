package com.foodapp.model.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.model.Entity.Restaurant;
import com.foodapp.model.Service.RestaurantService;


@RestController
@CrossOrigin("http://localhost:3000")
public class RestaurantController {
    
	@Autowired 
    RestaurantService resserv;
     
    @GetMapping("/getRestaurant")
    public List<Restaurant> getAllRestaurant() {
        return resserv.getAllRestaurant();
    }
    
    @GetMapping("/getRes/{id}")
    public Restaurant getRestaurant(@PathVariable int id) {
        return resserv.getRestaurant(id);
    }
    
    @PostMapping("/storeRes")
    public String saveDetails(@RequestBody Restaurant c) {
        resserv.saveResDetails(c);
        return "data added";
    }
            
    @PutMapping("/updateRes")    
    public String updatedetails(@RequestBody Restaurant c) {
        resserv.updateResItem(c);
        return "values Updated";
    }
            
    @DeleteMapping("/res/del/{id}") // Updated request mapping pattern
    public String deleteDetails(@PathVariable("id") int id) {
        resserv.deleteResById(id);
        return "deleted";
    }
	
}
