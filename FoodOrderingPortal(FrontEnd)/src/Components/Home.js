import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import "./HomePage.css"
export default function Home() {
  return (
    <div className='first-home'>
    <div >
      <Navbar/>
      <center><h1 style={{color:'black',fontSize:70,backgroundColor:'white',width:800}}>Welcome to FoodHub</h1></center>
      <div >
        <Link to="/log"><button style={{backgroundColor:'white',color:'black'}}>Login</button></Link>
        <Link to="/signup"><button style={{backgroundColor:'white',color:'black'}}>Sign Up</button></Link>
      </div>
    </div>
    </div>
  )
}
