import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Profile.css"
import { CiLocationOn} from 'react-icons/ci';
import {AiTwotoneMail,AiFillPhone,AiFillFacebook} from 'react-icons/ai';
import {FaRegAddressCard}  from 'react-icons/fa';
import Navbar from './Navbar';
const Profile = () => {
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

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
  <div>
  <Navbar/>
  <div className='profile-main'>
  <div className='profile-left'>
     <center><div className='profile-img'></div></center>
      <center><h2> {isEditing ? <input value={updatedCustomer.customer_name} onChange={(e) => handleInputChange(e, 'customer_name')} /> : customer.customer_name}</h2></center>

      <center><div className='profile-det'>
      <div className='box-icon'>
        <div className='box-icon-left'><span><AiTwotoneMail style={{fontSize:30,margin:0,display:'flex'}}/></span></div>
        <div className='box-icon-right'><p>{isEditing ? <input value={updatedCustomer.customer_email} onChange={(e) => handleInputChange(e, 'customer_email')} /> : customer.customer_email}</p></div>
      </div>
      <div className='box-icon'>
        <div className='box-icon-left'><span><AiFillPhone style={{fontSize:30}}/></span></div>
        <div className='box-icon-right'><p>{isEditing ? <input value={updatedCustomer.customer_number} onChange={(e) => handleInputChange(e, 'customer_number')} /> : customer.customer_number}</p></div>
      </div>
      <div className='box-icon'>
        <div className='box-icon-left'><span><AiFillFacebook style={{fontSize:30}}/></span></div>
        <div className='box-icon-right'><p>{isEditing ? <input value={updatedCustomer.face_book} onChange={(e) => handleInputChange(e, 'face_book')} /> : customer.face_book}</p></div>
      </div>
      <div className='box-icon'>
        <div className='box-icon-left'><span><FaRegAddressCard style={{fontSize:30}}/></span></div>
        <div className='box-icon-right'><p>{isEditing ? <input value={updatedCustomer.customer_address} onChange={(e) => handleInputChange(e, 'customer_address')} /> : customer.customer_address}</p></div>
      </div>
      </div></center>
      </div>
  <div className='profile-right'>
     
  <center><div className='box-item-desc'>
  <h5 style={{textAlign:'left'}} >About Me</h5>
  <div className='text'><p> {isEditing ? <input type='text' value={updatedCustomer.about_me} onChange={(e) => handleInputChange(e, 'about_me')} /> : customer.about_me}</p></div>
  </div></center>
  
  <center><div className='box-item-desc'>
  <h5 style={{textAlign:'left'}} >Describe your love for food</h5>
  <div className='text'><p>{isEditing ? <input value={updatedCustomer.customer_desc} onChange={(e) => handleInputChange(e, 'customer_desc')} /> : customer.customer_desc}</p>
  </div>
  </div></center>

  <center><div className='box-item-desc-fav'>
  <h5 style={{textAlign:'left'}} >Favourites</h5>
  <div className='text-fav'>
  
  <div className='text-item'>
  <div className='text-left'><p>Dish</p></div>
  <div className='text-right'><p>{isEditing ? <input value={updatedCustomer.fav_dish} onChange={(e) => handleInputChange(e, 'fav_dish')} /> : customer.fav_dish}</p></div>
  </div>
  <div className='text-item'>
  <div className='text-left'><p>Hotel</p></div>
  <div className='text-right'><p>{isEditing ? <input value={updatedCustomer.fav_hotel} onChange={(e) => handleInputChange(e, 'fav_hotel')} /> : customer.fav_hotel}</p></div>
  </div>

  {isEditing ? (
    <button style={{width:120}} onClick={handleSaveButtonClick}>Save</button>
  ) : (
    <button style={{width:120}} onClick={handleEditButtonClick}>Edit</button>
  )}
  
  </div>
  </div></center>
  
  
  
  </div>
  </div>
    </div>
  );
};

export default Profile;
