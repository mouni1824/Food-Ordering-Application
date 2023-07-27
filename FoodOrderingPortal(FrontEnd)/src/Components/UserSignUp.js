import React, { useState } from 'react';
import axios from 'axios';

export default function UserSignUp() {
    const [formData, setFormData] = useState({
        customer_name: '',
        customer_email: '',
        customer_number: '',
        customer_password: '',
        confirm_password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const data = {
          customer_name: formData.customer_name,
          customer_email: formData.customer_email,
          customer_number: formData.customer_number,
          customer_password: formData.customer_password,
          confirm_password: formData.confirm_password,
        };
    
        axios.post("http://localhost:8080/storeCust", data)
          .then((response) => {
            console.log(response.data);
              })
          .catch((error) => {
            console.error(error);
          });
      };
  return (
    <div>
      <center><h2>SignUp</h2></center>
      <form onSubmit={handleSubmit}>
      <div className='detail-row'>
        <div className='rows'>
          
          <input placeholder='Username' type="text" name="customer_name" id="customer_name" onChange={handleChange} required />
        </div>
        <div className='rows'>
          
          <input placeholder='Email' type="email" name="customer_email" id="customer_email" onChange={handleChange} required />
        </div>
        <div className='rows'>
          <input placeholder='Contact Number' type="text" name="customer_number" id="customer_number" onChange={handleChange} required />
        </div>
        <div className='rows'>
          <input placeholder='Password' type="password" name="customer_password" id="customer_password" onChange={handleChange} required />
        </div>
        <div className='rows'>
          <input placeholder='Confirm Password' type="password" name="confirm_password" id="confirm_password" onChange={handleChange} required />
        </div>
        <div className='rows'>
        <button type="submit">Sign Up</button></div></div>
      </form>
    </div>
  );
}
