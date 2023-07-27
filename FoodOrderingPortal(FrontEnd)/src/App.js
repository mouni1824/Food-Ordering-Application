import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import HomePage from './Components/HomePage';
import Cart from './Components/Cart';
import Profile from './Components/Profile';
import Restaurant from './Components/Restaurant'; // Replace 'Restaurant' with the actual file name
import Food from './Components/Food'
import About from './Components/About';
import { useState } from 'react';
import Signup from './Components/SignUp';
import Login from './Components/Login';
import Restaurants from './Components/Restaurants';
import FoodMenu from './Components/FoodMenu';
import FeedBack from './Components/FeedBack';
import SingleHotel from './Components/SingleHotel';
import Review from './Components/Review';
import Owner from './Components/Owner';
import Admin from './Components/Admin';
import Users from './Components/Users';
import RestaurantOwner from './Components/RestaurantOwner';

function App() {
  const [restaurantId, setRestaurantId] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
   
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mainhome" element={<HomePage />} />
            <Route path="/food" element={<Food addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/restaurants"  element={<Restaurants />} />
            <Route path='/hotel' element={<SingleHotel/>}/>
            <Route path="/review" element={<Review/>} />
            <Route path="/foodmenu/:restaurantId" element={<FoodMenu />} />
            <Route path="/feedback" element={<FeedBack/>} />
            <Route path="/restaurantpage" element={<Owner/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/aboutus" element={<About/>} />
            <Route path="/log" element={<Login/>} />
            <Route path="admin/users" element={<Users/>} />
            <Route path="admin/restaurant" element={<RestaurantOwner/>} />
            <Route path='/signup' element={<Signup/>} />
          </Routes>
        </Router>
      </div>
     
   
  );
}

export default App;
