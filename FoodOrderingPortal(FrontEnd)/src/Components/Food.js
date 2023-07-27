// Components/Food.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { foodItems } from './foodItems';
import './Food.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Food = ({ addToCart }) => {
  const [cityFilter, setCityFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [ratingSort, setRatingSort] = useState('');
  const [filteredFoodItems, setFilteredFoodItems] = useState([]);

  // Initialize the filtered food items with the default food items on mount
  useEffect(() => {
    setFilteredFoodItems(foodItems);
  }, []);

  // Apply filters when any of the filter options change
  useEffect(() => {
    const filteredItems = foodItems.filter((item) => {
      const itemCity = item.city || '';
      const itemType = item.type || '';
      return (
        itemCity.toLowerCase().includes(cityFilter.toLowerCase()) &&
        itemType.toLowerCase().includes(typeFilter.toLowerCase()) &&
        applyPriceFilter(item) // Call applyPriceFilter here
      );
    });

    // Sort the filtered items based on the selected rating
    const sortedItems = filteredItems.sort(applyRatingSort);

    setFilteredFoodItems(sortedItems);
  }, [cityFilter, typeFilter, priceFilter, ratingSort]);

  // Function to apply price filter
  const applyPriceFilter = (item) => {
    if (!priceFilter) return true;
    const [min, max] = priceFilter.split('-');
    return item.price >= parseInt(min) && item.price <= parseInt(max);
  };

  // Function to apply rating sort
  const applyRatingSort = (a, b) => {
    if (!ratingSort) return 0;
    return ratingSort === 'lowToHigh' ? a.rating - b.rating : b.rating - a.rating;
  };

  return (
    <div className='main-food' style={{ color: 'black' }}>
      <Navbar />
      <div className="food-menu">
        <h1>Food Menu</h1>
        
        <div className="filter-bar">
        <div className='filter-items'>
          <input className='city-filter'  style={{width:300,height:30,borderRadius:20,textAlign:'center',border:0}}
            type="text"
            placeholder="Food type..."
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          /></div>
          <div className='filter-items'>
          <select style={{width:100,height:30,borderRadius:20,textAlign:'center',border:0}} id='price-filter' value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
            <option value="">Price Range</option>
            <option value="0-100">0-100</option>
            <option value="100-200">100-200</option>
            <option value="300-400">300-400</option>
            {/* Add more price range options as needed */}
          </select></div>
          <div className='filter-items'>
            <input className='low-filter'
              type="radio"
              name="ratingSort"
              value="lowToHigh"
              checked={ratingSort === 'lowToHigh'}
              onChange={(e) => setRatingSort(e.target.value)}
            />
            <label htmlFor="lowToHigh">Low to High</label>
          </div>
          <div className='filter-items'>
            <input
              type="radio"
              className='high-filter'
              name="ratingSort"
              value="highToLow"
              checked={ratingSort === 'highToLow'}
              onChange={(e) => setRatingSort(e.target.value)}
            />
            <label htmlFor="highToLow">High to Low</label>
          </div>
        </div>



        <div className="food-cards">
          {filteredFoodItems.map((item) => (
            <div key={item.id} className="food-card">
              <img
                style={{ padding: 10, borderRadius: 20 }}
                src={item.img}
                width={200}
                height={150}
                alt={item.type}
              />
              <div className="food-details">
                <h4>{item.type}</h4>
                <h5>{item.hotel}</h5>
                <p>{item.cuisine}</p>
                <div className="star-rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={index < item.rating ? faStar : faStar}
                      className={`star-icon ${index < item.rating ? 'solid-star' : 'empty-star'}`}
                    />
                  ))}
                </div>
              </div>
              <div className='add-to-cart-btn'><button onClick={() => addToCart(item)}>Add to Cart</button></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Food;
