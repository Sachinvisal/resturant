import React from 'react'
import "./order.css"

function Order() {
  return (
    <section className='order'>
       <h3 className='sub-dishes'>Order now</h3>
       <h1 className='heading'>free and fast</h1>

       <form action=''>

          <div className='inputBox'>
            <div className='input'>
              <span>your name</span>
              <input type='text' placeholder='enter your name'/>
            </div>

            <div className='input'>
              <span>your phone number</span>
              <input type='number' placeholder='enter your phone number'/>
            </div>
          </div>

          <div className='inputBox'>
            <div className='input'>
              <span>your order</span>
              <input type='text' placeholder='enter your order'/>
            </div>

            <div className='input'>
              <span>additional food</span>
              <input type='text' placeholder='extra with food'/>
            </div>
          </div>

          <div className='inputBox'>
            <div className='input'>
              <span>how much</span>
              <input type='number' placeholder='how many order'/>
            </div>

            <div className='input'>
              <span>date and time</span>
              <input type='datetime-local' />
            </div>
          </div>

          <div className='inputBox'>
            <div className='input'>
              <span>your address</span>
              <textarea name='' placeholder='Enter you address' cols={30} rows={10}/>
            </div>

            <div className='input'>
              <span>your message</span>
              <textarea name='' placeholder='Enter you message' cols={30} rows={10}/>
            </div>
          </div>

          <input type='submit'  className='btn'/>
       </form>
    </section>
  )
}

export default Order
