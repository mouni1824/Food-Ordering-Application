package com.foodapp.model.Entity;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="admin")
public class Admin {
    
	@Id
	private int admin_id;
	
	@Column(name="admin_name",nullable = false , length =50 , unique = true)
	private String admin_name;
	
	@Column(name="admin_email",nullable = false , length =50 , unique = true)
	private String admin_email;
	
	@Column(name="admin_password",nullable = false , length =50 , unique = true)
	private String admin_password;
	
	@Column(name="admin_number",nullable = false , length =50 , unique = true)
	private String admin_number;

	public int getAdmin_id() {
		return admin_id;
	}

	public void setAdmin_id(int admin_id) {
		this.admin_id = admin_id;
	}

	public String getAdmin_name() {
		return admin_name;
	}

	public void setAdmin_name(String admin_name) {
		this.admin_name = admin_name;
	}

	public String getAdmin_email() {
		return admin_email;
	}

	public void setAdmin_email(String admin_email) {
		this.admin_email = admin_email;
	}

	public String getAdmin_password() {
		return admin_password;
	}

	public void setAdmin_password(String admin_password) {
		this.admin_password = admin_password;
	}

	public String getAdmin_number() {
		return admin_number;
	}

	public void setAdmin_number(String admin_number) {
		this.admin_number = admin_number;
	}

	public Admin(int admin_id, String admin_name, String admin_email, String admin_password, String admin_number) {
		super();
		this.admin_id = admin_id;
		this.admin_name = admin_name;
		this.admin_email = admin_email;
		this.admin_password = admin_password;
		this.admin_number = admin_number;
	}
	
	public Admin() {
		
	}
}

