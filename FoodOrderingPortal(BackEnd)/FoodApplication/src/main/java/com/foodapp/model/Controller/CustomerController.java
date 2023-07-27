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

import com.foodapp.model.Entity.Customer;
import com.foodapp.model.Service.CustomerService;

@RestController
@CrossOrigin("http://localhost:3000")
public class CustomerController {

	@Autowired 
    CustomerService custserv;
     
    @GetMapping("/getCust")
    public List<Customer> getAllCustomer() {
        return custserv.getAllCustomers();
    }
    
    @GetMapping("/getCust/{id}")
    public Customer getCustomer(@PathVariable int id) {
        return custserv.getCustomer(id);
    }
    
    @PostMapping("/storeCust")
    public String saveDetails(@RequestBody Customer c) {
        custserv.saveCustomer(c);
        return "data added";
    }
            
    @PutMapping("/updateCust")    
    public String updatedetails(@RequestBody Customer c) {
        custserv.updateCustomer(c);
        return "values Updated";
    }
            
    @DeleteMapping("/customer/del/{id}") // Updated request mapping pattern
    public String deleteDetails(@PathVariable("id") int id) {
        custserv.deleteCustomerById(id);
        return "deleted";
    }
}
