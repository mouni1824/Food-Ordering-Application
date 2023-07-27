import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Hotel.css';
import Navbar from './Navbar';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Restaurants({ setRestaurantId }) {
  const [cityFilter, setCityFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [originalRestaurants, setOriginalRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getRestaurant');
      setRestaurants(response.data);
      setOriginalRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const handleSearch = () => {
    const searchCity = cityFilter.toLowerCase();
    const filteredRestaurants = originalRestaurants.filter((restaurant) =>
      restaurant.city.toLowerCase().includes(searchCity)
    );
    setRestaurants(filteredRestaurants);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    if (event.target.value === 'high') {
      const sortedRestaurants = [...restaurants].sort((a, b) => b.rating - a.rating);
      setRestaurants(sortedRestaurants);
    } else if (event.target.value === 'low') {
      const sortedRestaurants = [...restaurants].sort((a, b) => a.rating - b.rating);
      setRestaurants(sortedRestaurants);
    }
  };

  const getStarRating = (rating) => {
    const roundedRating = Math.round(rating);
    const maxRating = 5;
    const fullStars = '★'.repeat(roundedRating);
    const emptyStars = '☆'.repeat(maxRating - roundedRating);
    return `${fullStars}${emptyStars}  `;
  };

  return (
    <div className='container' style={{ backgroundColor: 'black' }}>
      <Navbar />
      <div className='components'></div>
      <div className="restaurant-page">
        <div className="rest-image"></div>
        <center>
          <div className='top-box'>
            <div className="search-city">
              <input
                type="text"
                placeholder="Search by city..."
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
            <div className='filter-res'>
              <div id='filter-item'>
                <label>
                  <input
                    type="radio"
                    name="sortOption"
                    value="high"
                    checked={sortOrder === 'high'}
                    onChange={handleSortChange}
                  />High
                </label>
              </div>
              <div id='filter-item'>
                <label>
                  <input
                    type="radio"
                    name="sortOption"
                    value="low"
                    checked={sortOrder === 'low'}
                    onChange={handleSortChange}
                  />
                  <AiOutlineArrowDown />Low
                </label>
              </div>
            </div>
          </div>
        </center>
        <div className="restaurant-page">
          <div className="restaurant-cards">
            {restaurants.map((item, index) => (
              <div className="restaurant-card" key={index}>
                <div className="hotel-image">
                  <img
                    style={{ borderRadius: 10, padding: 5 }}
                    width={240}
                    height={130}
                    src={item.hotel_image}
                    alt="hotel"
                  />
                </div>
                <div className="hotel-comps">
                  <h4>{item.hotel_name}</h4>
                  <h5>{item.city}</h5>
                  <p className="location">{item.location}</p>
                  <div className="rating-button">{getStarRating(item.rating)}</div>
                  <div className='check-menu'>
                    <Link to={`/foodmenu/${item.hotelid}`}>
                      <center><button type='button'>Check on menu</button></center>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
