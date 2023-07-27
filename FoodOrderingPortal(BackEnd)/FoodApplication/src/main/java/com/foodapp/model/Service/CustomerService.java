package com.foodapp.model.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodapp.model.Entity.Customer;
import com.foodapp.model.Repository.CustomerRepo;


@Service
public class CustomerService {
	
	 @Autowired
	    private CustomerRepo customerRepo;

	    public List<Customer> getAllCustomers() {
	        return customerRepo.findAll();
	    }

	    public Customer getCustomer(int id) {
	        return customerRepo.findById(id).orElse(null);
	        // or use orElseThrow to throw an exception if the customer is not found
	    }

	    public void saveCustomer(Customer customer) {
	        customerRepo.save(customer);
	    }

	    public void updateCustomer(Customer customer) {
	        customerRepo.save(customer);
	    }

	    public void deleteCustomerById(int id) {
	        customerRepo.deleteById(id);
	    }

}
