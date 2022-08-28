import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material'
import React from 'react'
import { useEffect } from 'react';
import "./Footer.css";

const Footer = () => {
    useEffect(() =>{
        const menuLi = document.querySelectorAll("#menu_list li");
         function setMenuActive() {
            menuLi.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");
         }

        menuLi.forEach((n) => n.addEventListener('click', setMenuActive))
    }, []);
  return (
    <div className="Footer_menu">
        <ul className="menu" id="menu_list">
        <li><HomeRounded link={'#'} className="icon"  /></li>
        <li><Chat link={'#'} className="icon"/></li>
        <li><AccountBalanceWalletRounded link={'#'} className="icon"/></li>
        <li><Favorite  link={'#'} className="icon"/></li>
        <li><SummarizeRounded link={'#'} className="icon"/></li>
        <li><Settings link={'#'} className="icon"/></li>
        <div className="indicator"></div>
        </ul>
        
    </div>
  )
}

export default Footer