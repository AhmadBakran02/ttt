import React from 'react'
import './Login.css'
import * as image from './image.js'

export const Login = () => {
  return (
    <div className='body'>
      <div className="box">
        <p>Member Login</p>
        <form action="" >
          <label htmlFor="">
            <img src={image.img4} alt="" />
            <input type="email" placeholder='Email'/>
          </label>
          <label>
            <img src={image.img3} alt="" />
            <input type="password" placeholder='Password' />
          </label>
          <p className='forget'>Forget Password</p>
          <button type='button'>Login</button>
        </form>

        <div>
          <p>Not a member?</p>
          <a href="">Create Account</a>
        </div>
      </div>
    </div>
  )
}
