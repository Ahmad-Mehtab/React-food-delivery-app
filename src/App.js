import './App.css';
import barger1 from './img/barger1.png'
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import SubMenuContainer from './components/SubMenuContainer';
import MenuCard from './components/MenuCard';
import ItemCard from './components/ItemCard';
import DebitCard from './components/DebitCard';
import {MenuItems,Items} from './components/Data';
import {useState, useEffect } from 'react';
import CartItem from './components/CartItem';
import TotalAmountSec from './components/TotalAmountSec';


function App() {
 
  
  // Change main data state
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
   );
  useEffect(() =>{
    const menuLi = document.querySelector(".itemRowContainer")
    .querySelectorAll(".MenuCard");
     function setMenuCard() {
        menuLi.forEach((n) => n.classList.remove("active"));
        this.classList.add("active");
     }
    menuLi.forEach((n) => n.addEventListener('click', setMenuCard))
}, [isMainData]);

const setData = (itemId) =>{
  setMainData(Items.filter((element) => element.itemId === itemId));
}
  return (
    <div className="App">
      
      <Header />
      <MainContainer />
      
      <div className="dishContainer">
        <div className="menuCard">
          <SubMenuContainer name={"Menu Category"} />
        </div>
      </div>
      <div className="itemRowContainer">
        {
          MenuItems && MenuItems.map((data)=>
          <div key={data.id} onClick={()=>setData(data.itemId)}>
             <MenuCard item_pic={data.imgSrc} item_name={data.name} 
             isActive ={data.id === 1 ? true : false} />
          </div>
          )
        }
      </div>
      <div className="dishItemContainer">
        {
          isMainData && isMainData.map((data) => (
          <ItemCard 
          key={data.id}
          itemId={data.id}
          imgSrc={data.imgSrc}
           name={data.name}
            ratings={data.ratings} price={data.price} />
          ))}
      </div>
      <div className="rightMenu">
        <div className="debitCardContainer">
          <div className="debitCard">
            <DebitCard />
          </div>
        </div>

        <div className="cartCheckOutContainer" style={{width:"100%", 
             marginLeft:"auto", paddingTop:"50px", fontSize:"14px"}}>
              <SubMenuContainer name={"Carts Items"}  />
           <div className="cartContainer" >
            
            <div className="cartItems">
              <CartItem
              name={"burger Bristo"}
              imgSrc={barger1}
              price={"7.92"}
              qty={"5"} />
              
            </div>
           </div>
           <div className="totalSection">
           <TotalAmountSec />
           </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
