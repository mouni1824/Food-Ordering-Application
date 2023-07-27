import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SampleProfile = () => {
  const [customer, setCustomer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedCustomer, setUpdatedCustomer] = useState(null);

  useEffect(() => {
    fetchCustomerDetails();
  }, []);

  const fetchCustomerDetails = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getCust/3'); // Replace with your backend API URL for fetching customer details by ID
      setCustomer(response.data);
      setUpdatedCustomer({ ...response.data });
    } catch (error) {
      console.error('Error fetching customer details:', error);
    }
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleSaveButtonClick = async () => {
    try {
      // Save the updated customer details to the backend
      await axios.put('http://localhost:8080/updateCust', updatedCustomer); // Replace with your backend API URL for updating customer details
      setIsEditing(false);
      fetchCustomerDetails();
    } catch (error) {
      console.error('Error updating customer details:', error);
    }
  };

  const handleInputChange = (event, field) => {
    setUpdatedCustomer({
      ...updatedCustomer,
      [field]: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUpdatedCustomer({
      ...updatedCustomer,
      customer_image: formData,
    });
  };

  if (!customer) {
    return React.createElement('div', null, 'Loading...');
  }

  return (
    React.createElement('div', null,
      React.createElement('h1', null, 'Customer Details'),
      React.createElement('p', { style: { color: 'black' } }, 'ID: ' + customer.customer_id),
      React.createElement('p', null,
        'Name: ',
        isEditing ? React.createElement('input', { value: updatedCustomer.customer_name, onChange: (e) => handleInputChange(e, 'customer_name') }) : customer.customer_name
      ),
      // Add other customer details fields here
      React.createElement('p', null,
        'Customer Image: ',
        isEditing ? React.createElement('input', { type: 'file', onChange: handleImageChange }) : React.createElement('img', { src: customer.customer_image, alt: 'Customer', style: { maxWidth: '200px' } })
      ),
      isEditing ? React.createElement('button', { onClick: handleSaveButtonClick }, 'Save') : React.createElement('button', { onClick: handleEditButtonClick }, 'Edit')
    )
  );
};

export default SampleProfile;
