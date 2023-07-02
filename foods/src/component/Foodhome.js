import React from 'react'
import Dishes from './Dishes'
import About from './About'
import Menu from './Menu'
import Welcome from './Welcome'


function Foodhome() {
  return (
    <div>
      
      <Welcome/>
        <Dishes/> 
       <About/> 
       <Menu/> 
    </div>
  )
}

export default Foodhome
