import React from 'react'
import img from './img/Untitled-1.png'
import {CiDeliveryTruck} from 'react-icons/ci'
import {BiDollarCircle} from 'react-icons/bi'
import {BsHeadset} from 'react-icons/bs'
import "./about.css"

function About() {
  return (
    <section className='about'>
        <h3 className='sub-about'>About us</h3>
        <h1 className='heading'>Why choose us?</h1>
        <div className='row'>
            <div className='image'>
               <img src={img}/>
            </div>

            <div className='content'>
                <h3>best food in the country</h3>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p><br/>
                <div className='icons_container'>
                    <div className='icons'>
                    <i><CiDeliveryTruck/></i>
                    <span>free delivery</span>
                    </div>

                    <div className='icons'>
                    <i><BiDollarCircle/></i>
                    <span>easy payments</span>
                    </div>

                    <div className='icons'>
                    <i><BsHeadset/></i>
                    <span>24/7</span>
                    </div>
                </div><br/>
                <a href=''className='btn'>Learn more</a>
            </div>
        </div>
    </section>
  )
}

export default About
