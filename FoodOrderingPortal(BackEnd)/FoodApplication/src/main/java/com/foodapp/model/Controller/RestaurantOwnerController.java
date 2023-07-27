package com.foodapp.model.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.foodapp.model.Entity.RestaurantOwner;

import com.foodapp.model.Service.RestaurantOwnerService;

@RestController
public class RestaurantOwnerController {
	@Autowired 
    RestaurantOwnerService ownserv;
     
    @GetMapping("/getOwner")
    public List<RestaurantOwner> getAllOwner() {
        return ownserv.getAllOwner();
    }
    
    @GetMapping("/getOwner/{id}")
    public RestaurantOwner getRestaurantOwner(@PathVariable int id) {
        return ownserv.getRestaurantOwner(id);
    }
    
    @PostMapping("/storeOwner")
    public String saveDetails(@RequestBody RestaurantOwner c) {
        ownserv.saveOwnerDetails(c);
        return "data added";
    }
            
    @PutMapping("/updateOwner")    
    public String updatedetails(@RequestBody RestaurantOwner c) {
        ownserv.updateOwnerItem(c);
        return "values Updated";
    }
            
    @DeleteMapping("/owner/del/{id}") // Updated request mapping pattern
    public String deleteDetails(@PathVariable("id") int id) {
        ownserv.deleteOwnerById(id);
        return "deleted";
    }
}
