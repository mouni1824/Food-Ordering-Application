import React, { useState } from 'react';
import './Hotel.css';
import { HotelData } from './HotelData';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

import {AiOutlineArrowDown,AiOutlineArrowUp} from 'react-icons/ai'
export default function Restaurants() {
  const [cityFilter, setCityFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const handleCityFilterChange = (e) => {
    setCityFilter(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredRestaurants = HotelData.filter((item) =>
    item.city.toLowerCase().includes(cityFilter.toLowerCase())
  );

  const sortedRestaurants = filteredRestaurants.sort((a, b) => {
    if (sortOrder === 'highToLow') {
      return b.rating - a.rating;
    } else if (sortOrder === 'lowToHigh') {
      return a.rating - b.rating;
    } else {
      return 0;
    }
  });

  return (
    <div className='container' style={{backgroundColor:'black'}}>
    <Navbar/>
    <div className="restaurant-page">
      <div className="rest-image">
        
      </div>
 
      <div className='top-box'>
        
      <div style={{display:'flex'}} className='search-city'>
        <span>Search</span>
        <input
        className="search-input"
        placeholder="Enter City"
        type="text"
        id="cityFilter"
        value={cityFilter}
        onChange={handleCityFilterChange}
      /></div>

      <div className='filter-res'>
      <div id='filter-item'>
      <label>
      <input
        type="radio"
        name="sortOrder"
        value="highToLow"
        checked={sortOrder === 'highToLow'}
        onChange={handleSortOrderChange}
      />
      <AiOutlineArrowUp/>High 
    </label></div>
    <div id='filter-item'>
    <label>
            <input
              type="radio"
              name="sortOrder"
              value="lowToHigh"
              checked={sortOrder === 'lowToHigh'}
              onChange={handleSortOrderChange}
            />
            <AiOutlineArrowDown/>Low 
          </label></div>
       
      </div>

      

      </div>

      <br/><br/>

      <div  style={{backgroundColor:'black'}} className="restaurant-cards">
        {sortedRestaurants.map((item, index) => (
          <div className="restaurant-card" key={index}>
            <div className="hotel-image">
              <img style={{ borderRadius: 10,padding:5 }} width={240} height={130} src={item.img} alt="hotel" />
            </div>
            <div className="hotel-comps">
              <h4>{item.name}</h4>
              <h5>{item.desc}</h5>
              <p className="location">{item.location}</p>
              <div className="rating-button">{item.rating}</div>
            </div>
          </div>
        ))}
      </div>
    </div></div>
  );
}

