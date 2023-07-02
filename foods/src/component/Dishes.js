import React from 'react'
import {PiHeartStraightFill} from 'react-icons/pi'
import "./dishes.css"
import {BsEyeFill} from 'react-icons/bs'
import {BsStarFill} from 'react-icons/bs'
import {BsStarHalf} from 'react-icons/bs'
import img1 from './img/spaghetti-with-vegetablesbroccolitomatoespeppers-isolated-white-background.jpg'
import img2 from './img/fried-chicken-french-fries-white-plate.jpg'
import img3 from './img/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese.jpg'
import img4 from './img/instant-noodles-plate-closeup-white-isolated_269543-2507.avif'
import img5 from './img/delicious-fried-chicken-plate.jpg'
import img6 from './img/curry-fried-rice.jpg'
import img7 from './img/fried-chicken-with-french-fries-nuggets-meal-junk-food-unhealthy-food_1339-54706.avif'
import img8 from './img/gourmet-lifestyle-cocina-yummy-foodie.jpg'
import img9 from './img/grilled-chicken-with-teriyaki-sauce-rice_1339-69846.jpg'
import img10 from './img/isolated-asian-style-meat-with-rice-vegetables_219193-10329.avif'



function Dishes() {
  return ( 
    <section className='dishes' id='dishes'>
      <h3 className='sub-dishes'>our dishes</h3>
      <h1 className='heading'>popular dishes</h1>
       <div className='container'>
       <div className='box-container'>
         <div className='box'>
           <a className='Heart'><PiHeartStraightFill/></a>
           <a className='Eye'><BsEyeFill/></a>
           <img className='images' src={img1} alt=''/>
           <h3>spaghetti</h3>
           <div className='star'>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarHalf/></i>
           </div>
            <span>$10.89</span>
            <a className='btn'>add to cart</a>
         </div>
 
       <div className='box'>
  <a className='Heart'><PiHeartStraightFill/></a>
  <a className='Eye'><BsEyeFill/></a>
  <img className='images' src={img2} alt=''/>
  <h3>fried chicken</h3>
  <div className='star'>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarHalf/></i>
  </div>
  <span>$10.89</span>
  <a className='btn'>add to cart</a>
       </div>

       <div className='box'>
  <a className='Heart'><PiHeartStraightFill/></a>
  <a className='Eye'><BsEyeFill/></a>
  <img className='images' src={img3} alt=''/>
  <h3>tasty burger</h3>
  <div className='star'>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarHalf/></i>
  </div>
  <span>$10.89</span>
  <a className='btn'>add to cart</a>
       </div>

       <div className='box'>
  <a className='Heart'><PiHeartStraightFill/></a>
  <a className='Eye'><BsEyeFill/></a>
  <img className='images'  src={img4} alt=''/>
  <h3>instant noodles</h3>
  <div className='star'>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarHalf/></i>
  </div>
  <span>$10.89</span>
  <a className='btn'>add to cart</a>
       </div>

       <div className='box'>
  <a className='Heart'><PiHeartStraightFill/></a>
  <a className='Eye'><BsEyeFill/></a>
  <img className='images' src={img5} alt=''/>
  <h3>rose chicken</h3>
  <div className='star'>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarHalf/></i>
  </div>
  <span>$10.89</span>
  <a className='btn'>add to cart</a>
       </div>
       
       <div className='box'>
  <a className='Heart'><PiHeartStraightFill/></a>
  <a className='Eye'><BsEyeFill/></a>
  <img className='images' src={img9} alt=''/>
  <h3>teriyaki sauce rice</h3>
  <div className='star'>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarHalf/></i>
  </div>
  <span>$10.89</span>
  <a className='btn'>add to cart</a>
       </div>
       
       <div className='box'>
  <a className='Heart'><PiHeartStraightFill/></a>
  <a className='Eye'><BsEyeFill/></a>
  <img className='images' src={img10} alt=''/>
  <h3>Asian rice chicken</h3>
  <div className='star'>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarHalf/></i>
  </div>
  <span>$10.89</span>
  <a className='btn'>add to cart</a>
       </div>

       <div className='box'>
  <a className='Heart'><PiHeartStraightFill/></a>
  <a className='Eye'><BsEyeFill/></a>
  <img className='images' src={img6} alt=''/>
  <h3>french fries</h3>
  <div className='star'>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarFill/></i>
    <i><BsStarHalf/></i>
  </div>
  <span>$10.89</span>
  <a className='btn'>add to cart</a>
       </div>






 </div>
</div>
</section>
  )
}

export default Dishes
