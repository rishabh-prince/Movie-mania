import React from 'react';
import "./Seats.css";

const Seats = () => {
  return (
      <div className='seat-ui'>
        <h2>select seats</h2>
        <div className="seats">
            {Array(390).fill("").map((seat)=>{
                return <div className="selected seat"></div>
            })}
        </div>
        <button className='ticket-btn' onClick={()=>window.location.href="/payment"}>Book Tickets</button>
      </div>
  )
}

export default Seats