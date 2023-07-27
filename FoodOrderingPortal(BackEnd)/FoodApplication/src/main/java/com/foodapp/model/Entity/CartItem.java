package com.foodapp.model.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="item")
public class CartItem {

	  @Id
	  private int item_id;
	  
	  @ManyToOne
	  @JoinColumn(name="cart_id")
	  private Cart cart;
	 
	  @Column(name="quantity")
	  private int quantity;
}
