import { AddRounded, RemoveRounded } from '@mui/icons-material'
import React from 'react'
import "./CartItem.css";

const CartItem = ({name,imgSrc,price,qty}) => {
  return (
    <div className="cartItem">
        <div className="img_Box">
            <img src={imgSrc} alt="" />
        </div>
        <div className="itemSection">
            <h2 className="itemName">{name}</h2>
            <div className="itemQuantity">
                <span>x {qty}</span>
                <div className="quantity">
                    <AddRounded className="addItem" />
                    <RemoveRounded className="removeItem"/>
                </div>
            </div>
        </div>
        <div className="itemPrice">
            <span className="dollarSign">$ </span>
            <span className="itemPriceValue">{price}</span>
        </div>
    </div>
  )
}

export default CartItem