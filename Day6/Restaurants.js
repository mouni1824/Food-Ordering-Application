import React from 'react'
import "./Hotel.css"
import { HotelData } from './RData'
import { useState } from 'react';
export default function Restaurants() {

  const [cityFilter, setCityFilter] = useState('');

  const handleCityFilterChange = (e) => {
    setCityFilter(e.target.value);
  };

  const filteredRestaurants = HotelData.filter(
    (item) =>
      item.city.toLowerCase().includes(cityFilter.toLowerCase())
  );
  return (
    <div>
    
<div className='rest-image' >

<div className='filter-container'>
  <center><h1 style={{color:"white"}} >Search Restaurants near your location:</h1></center>
  <br></br>
  <center><input
    placeholder='Enter City'
    type='text'
    id='cityFilter'
    value={cityFilter}
    onChange={handleCityFilterChange}
  /></center>
</div>
</div>
    

{filteredRestaurants.map((item, index) => (
  <div className='list-hotels' key={index}>
    <div className='list-hotel'>
      <div className='hotel-image'>
        <img width={280} height={150} src={item.img} alt='hotel' />
      </div>
      <div className='hotel-comps'>
        <h3>{item.name}</h3>
        <h5>{item.desc}</h5>
        <p>{item.location}</p>
        <br />
        <div className='rating-button'>{item.rating}</div>
      </div>
    </div>
  </div>
))}

    </div>
  )
}

