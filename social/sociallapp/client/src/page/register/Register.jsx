import React, { useEffect, useRef, useState } from 'react'
import './register.scss';
import {Link} from "react-router-dom";
import Login from '../login/Login';

export default function 
() {
    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    const localSignUp=localStorage.getItem("signUp")

    const handleClick=()=>{
        if(email.current.value&&password.current.value)
       {
        
         localStorage.setItem("emailData",email.current.value)
         localStorage.setItem("passwordData",password.current.value)
         localStorage.setItem("signUp",email.current.value)

       }
    }
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Lamasocial</h3>
                <span className='loginDesc'>Connect with friends the world around you Lamasocial.</span>
    
            </div>
            <div className='loginCenter'></div>
            <div className="loginRight">
           
                <form className='loginBox'>
                    <input type='email'className='loginInput' ref={email}/>
                    <input type='password'className='loginInput' ref={password}/>
                    <Link to="/login">
                        <button className="loginBtn" onClick={handleClick}>Sign Up</button>
                    </Link>
                    <span className='forgotPassword'>Forgot Password ?</span>
                    <button className='newAccountBtn' type='submit'>Log In</button>

                </form>

            </div>
        </div>

    </div>
  )
}
