import React from 'react'
import "./Hotel.css"
export default function Hotel(props) {
  return (
    <div className='single-hotel ' >
      <h1>{props.hotel.name}</h1>
      <p>{props.hotel.desc}</p>
      <h3>{props.hotel.price}</h3>
    </div>
  )
}
