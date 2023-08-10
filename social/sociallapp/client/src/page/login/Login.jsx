import React, { useEffect, useRef, useState } from 'react'
import './login.scss';
import {Link} from "react-router-dom";
import Home from '../home/Home';

export default function 
() {
    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    
    const handleSubmit=()=>{
        if(email.current.value==getEmail && password.current.value==getPassword){
           
            localStorage.setItem("signUp",email.current.value)
            alert("dogru")
        }else{
            alert("Please Enter valid Credential")
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
            getEmail&&getPassword?
                <Home/>:
                <form className='loginBox' onSubmit={handleSubmit}>
                    <input type='email'className='loginInput' ref={email}/>
                    <input type='password'className='loginInput' ref={password}/>
               
                    <button className="loginBtn">Log In</button>
                  
                   
                    <span className='forgotPassword'>Forgot Password ?</span>
                    <Link to='/register'>
                        <button className='newAccountBtn' type='submit'>Create a New Account</button>
                    </Link>
                    

                </form>

            </div>
        </div>

    </div>
  )
}
