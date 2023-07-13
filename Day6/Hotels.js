import React from 'react';
import "./Hotel.css"
import Hotel from './Hotel';
export default function Hotels(props) {
  return (
    <div  className='hotels'>

    <div className='hotel-box' >
    {props.hotels.map(hotel=>(
      <Hotel key={hotel.id} hotel={hotel} />
    ))}
    </div>


    </div>
  )
}
