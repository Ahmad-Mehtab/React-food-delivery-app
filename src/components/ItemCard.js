import React,{useState} from 'react'
import './ItemCard.css';

import { AddRounded, Favorite, StarRounded } from '@mui/icons-material';

const ItemCard = ({ imgSrc, name, ratings, price, itemId }) => {
 const[isFrvt, setFrvt] = useState(false);
 const[currentRatings, setCurrentRatings] = useState(Math.floor(ratings));


const handleClick = (value)=>{
  setCurrentRatings(value)
}
  return (
    <div className="item_card" id={itemId}>
      <div className={`favourite ${isFrvt ? "active" : "" }`}
        onClick={()=> setFrvt(!isFrvt)}>
        <Favorite />
      </div>
      <div className="imgArea">
        <img src={imgSrc} alt="" className="itemImg" />
      </div>
      <div className="itemContent">
        <h3 className='itemName'>{name}</h3>
        <div className="bottom">
          <div className="rating">
         {
          Array.apply(null,{length:5}).map((e,i) => 
          <i key={i} className={`ratings ${currentRatings > i ? "orange" : "gray"}`}
           onClick={()=>handleClick(i+1)}>
            <StarRounded />
          </i>
            )}
            <h3 className="price">
              <span>$ </span>
              {price}
            </h3>
          </div>
          <i className="addToCard">
            <AddRounded />
          </i>
        </div>

      </div>
    </div>
  )
}

export default ItemCard