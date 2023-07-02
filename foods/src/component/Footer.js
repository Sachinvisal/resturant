import React from 'react'
import "./footer.css"




function Footer() {
  return (
    <section className='footer'>
       <div className='box-container'>
         <div className='box'>
          <h3>location</h3>
          <a href=''>Baththaramulla</a>
          <a href=''>Maharagama</a>
          <a href=''>Nugegoda</a>
          <a href=''>Malabe</a>
          <a href=''>Kaduwela</a>
         </div>

         <div className='box'>
          <h3>quik links</h3>
          <a href=''>home</a>
          <a href=''>dishes</a>
          <a href=''>Menu</a>
          <a href=''>reviwes</a>
          <a href=''>order</a>
         </div>

         <div className='box'>
          <h3>contact info</h3>
          <a href=''>+94 11 234567</a>
          <a href=''>+94 71 123456</a>
          <a href=''>sachinvisal97@gmail.com</a>
          <a href=''>No 123/2,Nugegoda,Colombo,Sri Lanka</a>
         </div>

         <div className='box'>
          <h3>Follow Us</h3>
          <a href=''className='facebook_icon'>Facebook</a>
          <a href=''className='instagram_icon'>instagram</a>
         </div>
       </div>
       <div className='credit'>copyright @ 2023 by <span>Mr. sachin sri visal</span></div>
    </section>
  )
}

export default Footer
