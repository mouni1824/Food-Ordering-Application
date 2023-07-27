import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './review.css';
import Navbar from './Navbar';

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getRev'); // Replace with the correct API endpoint
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const getStarRating = (rating) => {
    const filledStars = Math.round(rating);
    const emptyStars = 5 - filledStars;

    return (
      <div>
        {[...Array(filledStars)].map((_, index) => (
          <span key={index} style={{ color: 'gold' }}>
            ★
          </span>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={index} style={{ color: 'black' }}>
            ★
          </span>
        ))}
      </div>
    );
  };

  const getRandomProfileIcon = () => {
    // Replace with the actual URLs or file paths of your profile icons
    const profileIcons = [
      'https://img.freepik.com/free-vector/woman-profile-cartoon_18591-58477.jpg?size=338&ext=jpg',
      'https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-vector-illustration-graphic-design-135443492.jpg',
      'https://i.pinimg.com/originals/db/cd/71/dbcd719c98ab7f1519f7d7bc941dd3fe.jpg',
      'https://th.bing.com/th/id/OIP.HA4KYdxbNNkK4lXRpHcDVwHaHa?pid=ImgDet&rs=1',
      // Add more profile icons here with their local file paths
    ];
    
    const randomIndex = Math.floor(Math.random() * profileIcons.length);
    return profileIcons[randomIndex];
  };

  const getRandomUsername = () => {
    const adjectives = ['Happy', 'Grumpy', 'Sleepy', 'Sneezy', 'Bashful', 'Doc', 'Dopey', 'Hapless'];
    const nouns = ['Dwarf', 'Elf', 'Goblin', 'Wizard', 'Fairy', 'Troll', 'Dragon', 'Hobbit'];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${adjective}${noun}`;
  };

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Navbar />
   <center>
      <div className="review-cards-container">
        {reviews.map((review) => (
          <div key={review.review_id} className="review-card" style={{padding:5}}>
            <div className="profile-info">
              <img src={getRandomProfileIcon()} alt="Profile Icon" className="profile-icon" />
              <h4>{getRandomUsername()}</h4>
            </div>
            <p style={{position:'relative',display:'flex'}}>
              Rating: {getStarRating(review.rating)}
            </p>
            <p> {review.description}</p>
          </div>
        ))}
      </div></center>
    </div>
  );
};

export default Review;
