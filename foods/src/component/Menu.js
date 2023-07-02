import React from 'react'
import "./menu.css"
import {BsStarFill} from 'react-icons/bs'
import {BsStarHalf} from 'react-icons/bs'
import {PiHeartStraightFill} from 'react-icons/pi'
import img1 from './img/pixzolo-photography-8YBHgP0WrEo-unsplash.jpg'
import img2 from './img/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese.jpg'
import img3 from './img/gourmet-lifestyle-cocina-yummy-foodie.jpg'
import img4 from './img/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food.jpg'
import img5 from './img/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay.jpg'
import img6 from './img/margherita-pizza-lies-wooden-board_288990-1642.avif'

function Menu() {
  return (
    <section className='menu'>

       <h3 className='sub-dishes'>Our Menu</h3>
       <h1 className='heading'>today's speciality </h1>
      
      
        <div className='box-container'>
          
           <div className='box'>
            <div className='image'>
              <img src={img1} alt=''/>
              <a className='Heart'><PiHeartStraightFill/></a>
            </div>
            <div className='content'>
              <div className='star'>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarHalf/></i>
              </div>
              <h3>delicious food</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <a className='btn'>add to cart</a>
              <span className='price'>$12.89</span>
            </div>
          </div>

          <div className='box'>
            <div className='image'>
              <img src={img2} alt=''/>
              <a className='Heart'><PiHeartStraightFill/></a>
            </div>
            <div className='content'>
              <div className='star'>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarHalf/></i>
              </div>
              <h3>delicious food</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <a className='btn'>add to cart</a>
              <span className='price'>$12.89</span>
            </div>
          </div>

          <div className='box'>
            <div className='image'>
              <img src={img3} alt=''/>
              <a className='Heart'><PiHeartStraightFill/></a>
            </div>
            <div className='content'>
              <div className='star'>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarHalf/></i>
              </div>
              <h3>delicious food</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <a className='btn'>add to cart</a>
              <span className='price'>$12.89</span>
            </div>
          </div> 
          <div className='box'>
            <div className='image'>
              <img src={img4} alt=''/>
              <a className='Heart'><PiHeartStraightFill/></a>
            </div>
            <div className='content'>
              <div className='star'>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarHalf/></i>
              </div>
              <h3>delicious food</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <a className='btn'>add to cart</a>
              <span className='price'>$12.89</span>
            </div>
          </div>

          <div className='box'>
            <div className='image'>
              <img src={img5} alt=''/>
              <a className='Heart'><PiHeartStraightFill/></a>
            </div>
            <div className='content'>
              <div className='star'>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarHalf/></i>
              </div>
              <h3>delicious food</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <a className='btn'>add to cart</a>
              <span className='price'>$12.89</span>
            </div>
          </div>

          <div className='box'>
            <div className='image'>
              <img src={img6} alt=''/>
              <a className='Heart'><PiHeartStraightFill/></a>
            </div>
            <div className='content'>
              <div className='star'>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarFill/></i>
              <i><BsStarHalf/></i>
              </div>
              <h3>delicious food</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <a className='btn'>add to cart</a>
              <span className='price'>$12.89</span>
            </div>
          </div>
         
          

        </div>
      
    </section>
  )
}

export default Menu
