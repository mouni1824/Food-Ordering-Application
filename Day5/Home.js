import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "./Home.css"
export default function Home() {
  return (
    <div className='home-screen' >
    <br></br><br></br><br></br>
    <div className='location'>
    <input type='text' placeholder='Enter Location'></input>
    <button type='submit'>Enter</button>
    </div>
    <Footer/>
    </div>
  )
}
