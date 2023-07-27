import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/mainhome"><div>Food</div><div style={{color:'#ff761a',position:'relative',right:'5px'}}>Hub</div></Link>
      </div>
      <div className="nav-icons">
      <div className='nav-item'>
        <Link to="/cart" className="icon-link">
          <AiOutlineShoppingCart className='nav-icon' />
        </Link> </div>
        <div className='nav-item'>
        <Link to="/profile" className="icon-link">
          <AiOutlineUser className='nav-icon' />
        </Link></div>
      </div>
      <div  className='nav-item' id="menu-icon" onClick={handleMenuClick}>
        <AiOutlineMenu  className='nav-icon'/>
      </div>
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/food" className="sidebar-link" onClick={closeMenu}>
         <div className='nav-menu'><p>Food</p></div>
        </Link>
      
        <Link to="/aboutus" className="sidebar-link" onClick={closeMenu}>
        <div className='nav-menu'><p>About Us</p></div>
        </Link>
        <Link to="/restaurants" className="sidebar-link" onClick={closeMenu}>
        <div className='nav-menu'><p>Restaurant</p></div>
        </Link>
        <Link to="/review" className="sidebar-link" onClick={closeMenu}>
        <div className='nav-menu'><p>Reviews</p></div>
        </Link>
        <Link to="/feedback" className="sidebar-link" onClick={closeMenu}>
        <div className='nav-menu'><p>FeedBack</p></div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
