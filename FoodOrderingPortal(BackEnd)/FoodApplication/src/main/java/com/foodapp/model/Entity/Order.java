package com.foodapp.model.Entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="food_order")
public class Order {
    
	@Id
	private int order_id;
	
	@Column(name="order_date")
	private String order_date;
		
	@Column(name="total_amount")
	private int total_amount;
	
	@Column(name="order_status")
	private String order_status;
	
	@ManyToOne
	@JoinColumn(name = "customer_id")
	private Customer customer;
	
	@OneToOne(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
	private Payment payment;


	
}
