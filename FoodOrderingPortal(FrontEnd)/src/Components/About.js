import React from 'react'
import Navbar from './Navbar'
import { FaUnderline } from 'react-icons/fa'
import "./about.css"
export default function About() {
  return (
    <div  className='about-main' style={{backgroundColor:"black"}}  >
    <Navbar/>
    <div className='about-image'>
    </div>
    <center><div className='about-contents'>
     <div className='about-content'>
     <h1 style={{color:"white",fontSize:80}} >About Us</h1>
     <br></br>
     <p> Welcome to our food ordering application! We are dedicated to providing
     a seamless and convenient experience for ordering delicious food from a
     variety of restaurants.Our mission is to connect food lovers with their favorite cuisines
     while supporting local restaurants and businesses. We understand the
     importance of good food and the joy it brings, which is why we strive to
     make the process of ordering food as easy and enjoyable as possible.
     With our user-friendly interface, you can browse through a wide range of
     restaurants, explore their menus, and place your orders with just a few
     clicks.</p>
     <br></br>
     <div className='contact-button' style={{height:40
    }}>Contact Us</div>
     </div>
     <div className='about-content'>
     <img src="about.png" width={400} height={400}></img>
     </div>

    </div></center>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className='quotes'>
    <div className='block'>
    <div className='block-img' style={{marginRight:30}}><img src='block1.jpg' width={150} height={300} ></img></div>
    <div className='block-img' style={{marginRight:30}}><img src='block3.jpg' width={150} height={300}></img></div>
    <div className='block-img' style={{marginRight:30}}><img src='block2.jpg' width={150} height={300}></img></div>
    <div className='block-img'style={{marginRight:30}}><img src='block4.jpg' width={150} height={300}></img></div>
    </div>

    <div className='quote'>" Food brings people together, creating moments of joy and connection. With our food ordering application, we aim to make those moments even more special by providing a seamless and convenient experience. "</div>
    </div>
    <div className='dummy' ></div>

    </div>
  )
}
