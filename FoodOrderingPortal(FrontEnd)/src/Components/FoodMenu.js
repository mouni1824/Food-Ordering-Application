import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./FoodMenu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import Overview from './Overview';
import Review from './Review';

export default function FoodMenu() {
  const { restaurantId } = useParams();
  
  const [foodItems, setFoodItems] = useState([]);
  const [ratingSort, setRatingSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [showOverview, setShowOverview] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    if (restaurantId) {
      fetchFoodItems();
    }
  }, [restaurantId]);

  const fetchFoodItems = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/getFoodItemsByHotelId/${restaurantId}`);
      setFoodItems(response.data);
    } catch (error) {
      console.error('Error fetching food items:', error);
    }
  };

  const applyRatingSort = (a, b) => {
    if (!ratingSort) return 0;
    return ratingSort === 'lowToHigh' ? a.food_rating - b.food_rating : b.food_rating - a.food_rating;
  };

  const applyPriceRangeFilter = (item) => {
    if (!priceRange) return true;
    switch (priceRange) {
      case 'under10': return item.price < 100;
      case '10to20': return item.price >= 100 && item.price <= 200;
      case 'over20': return item.price > 200;
      default: return true;
    }
  };

  const filteredFoodItems = foodItems.filter(item => {
    return item.food_name.toLowerCase().includes(searchQuery.toLowerCase()) && applyPriceRangeFilter(item);
  }).sort(applyRatingSort);

  const handleTabClick = (tab) => {
    if (tab === 'overview') {
      setShowOverview(!showOverview);
      setShowReviews(false);
    } else if (tab === 'reviews') {
      setShowReviews(!showReviews);
      setShowOverview(false);
    }
  };

  return (
    <div className='container' style={{backgroundColor:'black'}} >
      <Navbar/>
      <div className='tabs' style={{display:'flex'}}>
       <div id='tab-comp'> <h3 onClick={() => handleTabClick('overview')}>Overview</h3></div>
        <div id='tab-comp'><h3 onClick={() => handleTabClick('reviews')}>Reviews</h3></div>
      </div>

      {showOverview && <Overview />}
      


      <br/><br/><br/>
      <div className='filter-container'>
        <div className='search-type'>
          <input
            type="text"
            placeholder="Search by food name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className='rating-filter'>
          <label>
            <input
              type="radio"
              name="ratingSort"
              value="lowToHigh"
              checked={ratingSort === 'lowToHigh'}
              onChange={() => setRatingSort('lowToHigh')}
            />
            Low
          </label>
          <label>
            <input
              type="radio"
              name="ratingSort"
              value="highToLow"
              checked={ratingSort === 'highToLow'}
              onChange={() => setRatingSort('highToLow')}
            />
            High
          </label>
        </div>
        <div className='price'>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">All Prices</option>
            <option value="under10">0-100</option>
            <option value="10to20">100 - 200</option>
            <option value="over20">200-300</option>
          </select>
        </div>
      </div>

      <div className="food-items">
        {filteredFoodItems.map((item) => (
          <div className="food-item" key={item.food_id}>
            <img
              style={{ padding: 10, borderRadius: 20 }}
              src={item.food_image}
              width={200}
              height={150}
              alt={item.type}
            />
            <div className='food-details'>
              <h4>{item.food_name}</h4>
              <p>{item.cuisine}</p>
              <p>₹{item.price}</p>
              <div className="star-rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={index < item.food_rating ? faStar : faStar}
                    className={`star-icon ${index < item.food_rating ? 'solid-star' : 'empty-star'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
