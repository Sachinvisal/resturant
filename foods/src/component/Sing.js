import React, { useState } from 'react';
import './sing.css';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGoogleCircle, AiFillTwitterCircle } from 'react-icons/ai';

function Sing() {
  const [leftPositionX, setLeftPositionX] = useState('-400px');
  const [leftPositionY, setLeftPositionY] = useState('50px');
  const [leftPositionZ, setLeftPositionZ] = useState('110px');

  function register() {
    setLeftPositionX('-400px');
    setLeftPositionY('50px');
    setLeftPositionZ('110px');
  }

  function login() {
    setLeftPositionX('50px');
    setLeftPositionY('450px');
    setLeftPositionZ('0');
  }

  return (
    <div className='sing_hero'>
      <div className='form_box'>
        <div className='button_box'>
          <div id='btn' style={{ left: leftPositionZ }}></div>
          <button type='button' className='toggle-btn' onClick={login}>
            Log In
          </button>
          <button type='button' className='toggle-btn' onClick={register}>
            Register
          </button>
        </div>
        <div className='social_icons'>
          <a href='' className='facebook_icon'>
            <AiFillGoogleCircle />
          </a>
          <a href='' className='facebook_icon'>
            <BsFacebook />
          </a>
          <a href='' className='facebook_icon'>
            <AiFillTwitterCircle />
          </a>
        </div>
        <form id='login' className='input_group' style={{ left: leftPositionX }}>
          <input type='text' className='input_field' placeholder='User name' required />
          <input type='text' className='input_field' placeholder='Enter Password' required />
          <input type='checkbox' className='check_box' />
          <span>Remember Password</span>
          <button type='submit' className='submit_btn'>
            Log in
          </button>
        </form>

        <form id='register' className='input_group' style={{ left: leftPositionY }}>
          <input type='text' className='input_field' placeholder='User name' required />
          <input type='email' className='input_field' placeholder='Email' required />
          <input type='text' className='input_field' placeholder='Enter Password' required />
          <input type='checkbox' className='check_box' />
          <span>I agree to the terms & conditions</span>
          <button type='submit' className='submit_btn'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sing;