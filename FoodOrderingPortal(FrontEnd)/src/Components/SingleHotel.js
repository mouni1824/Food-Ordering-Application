import React, { useState } from 'react';
import Overview from './Overview';
import Review from './Review';
import FoodMenu from './FoodMenu';

const SingleHotel = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  let content = null;
  if (activeTab === 'overview') {
    content = <Overview />;
  } else if (activeTab === 'menu') {
    content = <FoodMenu />;
  } else if (activeTab === 'reviews') {
    content = <Review />;
  }

  return (
    <div>
      <nav>
        <button onClick={() => handleTabClick('overview')}>Overview</button>
        <button onClick={() => handleTabClick('menu')}>Menu</button>
        <button onClick={() => handleTabClick('reviews')}>Reviews</button>
      </nav>
      <div>
        {content}
      </div>
    </div>
  );
};

export default SingleHotel;
