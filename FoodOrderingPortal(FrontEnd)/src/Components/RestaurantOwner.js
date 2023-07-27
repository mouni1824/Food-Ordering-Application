import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { hover } from '@testing-library/user-event/dist/hover';

const styles = {
    container: {
        backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-simple-food-delivery-meal-fashion-poster-background-yellow-back-image_158378.jpg")',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: 'black',
      color: 'white',
    },
    restaurantGrid: {
        display: 'flex',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Display 2 or 3 restaurants per line, adjust as needed
        gap: '20px',
        width: '100%',
      },
    
      restaurantCard: {
        padding: '20px',
        width:'600px',
        boxShadow: '2px 2px 4px gray',
        borderRadius: '4px',
        marginBottom: '10px',
        backgroundColor: 'white',
        color: 'black',
      },
    
    name: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#ff761a',
    },
    city: {
      fontSize: '16px',
      color: '#ff761a',
    },
    location: {
      fontSize: '14px',
      color: 'black',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '400px',
      padding: '20px',
      boxShadow: '2px 2px 4px gray',
      borderRadius: '4px',
      margin: '10px',
      backgroundColor: 'white',
      color: '#ff761a',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      marginBottom: '10px',
      backgroundColor: 'gainsboro',
      color: '#ff761a',
      border: 'none',
      borderRadius: '4px',
    },
    submitButton: {
      padding: '10px',
      fontSize: '16px',
      width: '150px',
      backgroundColor: '#ff761a',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };
export default function RestaurantOwner() {
  const [restaurants, setRestaurants] = useState([]);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    // Fetch the restaurants when the component mounts
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getRestaurant'); // Replace with your backend URL
      setRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform POST operation to add a new restaurant
    try {
      const response = await axios.post('http://localhost:8080/storeRes', { // Replace with your backend URL
        hotel_name: name,
        city: city,
        location: location,
      });
      console.log(response.data);
      // Reset the form fields and fetch updated restaurants
      setName('');
      setCity('');
      setLocation('');
      fetchRestaurants();
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{color:"white"}}>Restaurants</h2>

      {/* List of restaurants */}
      {restaurants.map((restaurant) => (
        <div key={restaurant.hotelid} style={styles.restaurantCard}>
        <div><img src={restaurant.hotel_image} width={200} height={150}></img></div>
           <div className='details'>
          <div style={styles.name}>{restaurant.hotel_name}</div>
          <div style={styles.city}>{restaurant.city}</div>
          <div style={styles.location}>{restaurant.location}</div>
          <div style={styles.location}>Rating:{restaurant.rating}</div></div>
          {/* Add other fields here as needed */}
        </div>
      ))}

      {/* Form to add a new restaurant */}
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Restaurant Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.submitButton}>
          Add Restaurant
        </button>
      </form>
    </div>
  );
}
