import React, { useEffect } from 'react'
import {} from "@mui/material";
import { SearchRounded,ShoppingCartRounded,BarChart } from '@mui/icons-material';
import "./Header.css";
import chef1 from './../img/chef1.png'
import avatar from './../img/avatar.png'

function Header() {
  useEffect(()=>{
   const toggleMenu = document.querySelector('.tgle_icon');
    toggleMenu.addEventListener('click', () =>{
      document.querySelector('.rightMenu').classList.toggle('active')
     console.log('hello');
    })
  },[])
  return (
    <header>
      <img src={chef1} alt="" />
      <div className="input_box">
        <SearchRounded className="search_icon" />
        <input type="text" placeholder='search' />
      </div>
      <div className="shoping_cart">
        <ShoppingCartRounded className="cart"/>
        <div className="cart_qnty">
            <p>2</p>
        </div>
      </div>

      <div className="profile_content">
        <div className="pic_box">
        <img src={avatar} alt="" profile_pic />
        </div>
        <h2 className="user_name">Ahmad Mehtab</h2>
      </div>
      <div className="toggle-menu">
        <BarChart className="tgle_icon" />
      </div>
    </header>
  )
}

export default Header