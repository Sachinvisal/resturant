import React from 'react'
import './welcome.css'
import imgwelcome from "./img/welcome-chef.jpeg" 
function Welcome() {
  return (
    <section className='welcome'>
        <div className='contents'>
          <div className='welcome_row'>
          <h2>Welcome to Resto</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <a href=''className='btn'>Learn more</a>
          </div>
         
            <div className='welcome-text'>
            <img className='wel_come' src={imgwelcome} alt/>
            </div>   
        </div>
    </section>
  )
}

export default Welcome
