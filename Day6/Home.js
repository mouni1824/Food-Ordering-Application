import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import * as AiIcons from 'react-icons/ai';
import "./Home.css"
import { useState,useEffect } from 'react'
export default function Home() {
  //for slide
  const [index, setIndex] = useState(0);
  const images1 = ['image1.jpg', 'image2.jpg','image3.jpg','image4.jpg'];
  const images2 = ['image5.jpg', 'image6.jpg','image7.jpg','image8.jpg'];
  const images3 = ['image9.jpg', 'image10.jpg','image11.jpg','image12.jpg'];
  useEffect(() => {
    const intervalId = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % images1.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  


  return (
    <div className='home-screen' >
    <br></br><br></br><br></br>
    <div className='main-location' >
    <div id='title'>
    <h1>Are you hungry?</h1><br></br>
    <p>Don't Wait!!!</p>
    <p>Order food from your nearest Restaurant!</p>
    <br></br>
    <div className='menu-button'>CHECK ON MENU</div>
    </div>

  
    </div>
    
    <div className='slides' >
    <div className='slide'>
    <img src={images1[index]} alt='Slide' style={{ width: '400px', height: '200px', top: '50%', position: 'top 120px',position:'static '}} /></div>
    
    <div className='slide'>
    <img src={images2[index]} alt='Slide' style={{ width: '400px', height: '200px', top: '50%', position: 'top 120px',position:'static '}} /></div>
    
    <div className='slide'>
    <img src={images3[index]} alt='Slide' style={{ width: '400px', height: '200px', top: '50%', position: 'top 120px',position:'static '}} /></div>
    
    
    </div>


    <Footer/>
    </div>
  )
}
