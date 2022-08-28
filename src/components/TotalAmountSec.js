import React from 'react';
import './TotalAmountSec.css';

const TotalAmountSec = () => {
  return (
    <div>
    <div className='total_sec'>
        <h3>Total</h3>
        <p>
            <span>$ </span>45.5
            
        </p>
    </div>
        <button className="checkOutButton">Check Out</button>
    </div>
  )
}

export default TotalAmountSec