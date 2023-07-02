import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import {PiShoppingCartSimpleFill} from 'react-icons/pi'
import {PiHeartStraightFill} from 'react-icons/pi'
import {BiSearch} from 'react-icons/bi'
import img_logo from './img/restaurant_93192.png'


function Navbar() {
  const [fix,setFix] = useState(false)

  function setFixed() {
    if(window.scrollY >=392){
      setFix(true)
    }else{
      setFix(false)
    }
  }
  window.addEventListener("scroll",setFix)
  const [Mobile,setMobile] = useState(false)
  return (
   <nav className= {fix ? 'navbar fixed' :'navbar'}>
    <img className='logos' src={img_logo} alt=''/><h3 className='logo'>Resto</h3>
      <ul className= {Mobile? "nav-links-mobile" : "nav-Links"} onClick={() => setMobile(false)}>

        <Link to="/"><li>Home</li></Link> 
        <Link to="/dishes"><li>Dishes</li></Link>
        <Link to="/menu"><li>Menu</li></Link>
        <Link to="/order"><li>Order</li></Link>
        <Link to="/sing"><li>Sing In</li></Link>
        <Link><li className='cart'><BiSearch/></li></Link>
        <Link><li className='cart'><PiShoppingCartSimpleFill/></li></Link>
        <Link><li className='hart'><PiHeartStraightFill/></li></Link> 
      </ul>
      <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
        {Mobile?<ImCross/>: <FaBars/>}
      </button>
   </nav>
  )
}

export default Navbar
