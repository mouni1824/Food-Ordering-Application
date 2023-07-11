import React from 'react'
import "./Footer.css";
import * as BsIcons from 'react-icons/bs';
export default function Footer() {
  return (
    <div className='footer' >

      <div className='contents'>

        <div  className='content-spl'><h3>About Us</h3><br></br>
        <p>Food Hub that lets you order food from your favorite local restaurants and have it delivered to your door.</p>
        </div>

        <div  className='content'><h3>Contact Us</h3>
        <br></br>
        <ul>
          <li>Who are we</li>
          <li>Blog</li>
          <li>Work with Us</li>
          <li>ContactUs</li>
        </ul>
        </div>
        <div  className='content'><h3>About Us</h3><br></br>
        <ul>
          <li>Who are we</li>
          <li>Blog</li>
          <li>Work with Us</li>
          <li>ContactUs</li>
        </ul>
        </div>
        <div id='social-media' className='content'><h3>Social Media</h3><br></br>
        <ul>
          <li><BsIcons.BsFacebook/> www.facebook.com</li>
          <li><BsIcons.BsInstagram/> www.instagram.com</li>
          <li><BsIcons.BsWhatsapp/> www.whatsapp.com</li>
          <li><BsIcons.BsTwitter/> www.twitter.com</li>
        </ul>
        </div>
      </div>
    
    </div>
  )
}
