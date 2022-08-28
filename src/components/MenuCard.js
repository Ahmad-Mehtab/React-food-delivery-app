import React from 'react';
import './MenuCard.css';
import { ChevronRightRounded } from '@mui/icons-material';

const MenuCard = ({item_pic, item_name, isActive}) => { 
  return (
    <div className={`MenuCard ${isActive ? `active` : ``}`}>
        <div className="imgBox">
        <img src={item_pic} alt="" />
        </div>
        <h3>{item_name}</h3>
        <i className="loadMenu">
            <ChevronRightRounded />
        </i>

    </div>
  )
}

export default MenuCard