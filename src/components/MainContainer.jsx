import React from 'react'
import './MainContainer.css';
import banner from '../img/banner3.png';
import on_backgrnd from '../img/upon_background.png';
import BannerName from './BannerName';

const MainContainer = () => {
  return (
    
    <div className='main_container'>
        <div className="banner">
          <BannerName name={"vetri"} discount={"20"} link={"#"} />
        <img src={banner} alt="" className='deliveryPic' />
        <img src={on_backgrnd} alt="" className='on_backgrnd' />
        </div>
    </div>
    
  )
}

export default MainContainer