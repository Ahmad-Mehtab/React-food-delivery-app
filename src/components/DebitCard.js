import React from 'react';
import "./DebitCard.css";

const debitCard = () => {
  return (
    <div className="cardGroup">
      <img className="cardLogo"
      src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FVisaLogo.png?alt=media&token=d6cac80d-a066-4388-97c2-9a57acfe4266" alt="" />
      <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fchip.png?alt=media&token=401162f6-2dd2-4da4-bef7-6479c132789c" alt="" 
      className='cardChip' />
      <div className="cardNo">1234 567 8920 3344</div>
      <div className="cardName">Ahmad Mehtab</div>
      <div className="cardFrom">20/22</div>
      <div className="cardTo">10/25</div>
      <div className="cardRing"> </div>
    </div>
  )
}

export default debitCard