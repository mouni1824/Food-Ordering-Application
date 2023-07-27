package com.foodapp.model.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="payment")
public class Payment {

	@Id
	private int payment_id;
	
	@Column(name="payment_method")
	private String payment_method;
	
	@Column(name="payment_status")
	private String payment_status;
	
	@OneToOne
    @JoinColumn(name = "order_id")
    private Order order;

	
	
	
	
	
	
}
