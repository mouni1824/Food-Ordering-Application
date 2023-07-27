// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./Footer.css"
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p style={{textAlign:'justify'}}>
          Welcome to Foodie Delight, your go-to destination for exploring delicious dishes from around the world.
          We are passionate food lovers who believe that food is not just about satisfying hunger; it's an experience
          that brings people together. 
          </p>
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <p><AiIcons.AiOutlineMail/>foodhub@gmail.com</p>
          <p><AiIcons.AiFillPhone/>+91 9384636487</p>
          <p><AiIcons.AiOutlineMessage/>+91 6754739208</p>
        </div>
        <div className="footer-section">
          <h2>Social Media</h2>
          <div className="social-icons" style={{textAlign:'center'}} >
          <p><BsIcons.BsFacebook/> www.facebook.com</p>
          <p><BsIcons.BsInstagram/> www.instagram.com</p>
          <p><BsIcons.BsWhatsapp/> www.whatsapp.com</p>
          <p><BsIcons.BsTwitter/> www.twitteruser.com</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
