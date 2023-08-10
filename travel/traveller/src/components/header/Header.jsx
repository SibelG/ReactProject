import React from 'react'
import './header.scss'
import {Link} from "react-router-dom"


import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import { useAuth0 } from "@auth0/auth0-react";


export default function Home() {


  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div className='home'>
        <div className='container'>
        <div className="topMenu">
            <div className='leftMenu'>
                <img  className="logo" src="assets/shop.png" alt=""/>
                <span className='logoTitle'><b>Shofy.</b></span>
               
            </div>
            <div className='centerMenu'>
            <input className="searchBox" type='text' autoComplete='off' value="" placeholder='Search Your Product...'/>
            <button className='search'>Search</button>
            </div>
            <div className='rightMenu'>
                <div className='personIcon'>
                    <PersonIcon/>
                     {
                        isAuthenticated ? <span>Hello, {user.name}</span>
                        : <span>Hello, Creative Tutorial</span>
                     }
                    
                </div>
            <div className='rightButton'>
                <FavoriteBorderOutlinedIcon className='rightBtn' style={{ color: "rgb(2, 137, 209)" }} />
                <ShoppingBasketOutlinedIcon className='rightBtn' style={{ color: "rgb(2, 137, 209)" }}/>
            </div>
                

            </div>
        </div>
        
        </div>
        
        <div className="bottomMenu">
            <div className='bottomMenuTop'>
                <div className='contact'>
                    <ul>
                        <li>
                            <Link to="/" className='link'>Home</Link>
                        </li>
                        <li>
                            <Link to="/product" className='link'>Product</Link>
                        </li>
                        <li>
                            <Link to="/about" className='link'>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className='link'>Contact</Link>
                        </li>
                    </ul>
             
                </div>
              
                <div className='auth'>
                    {
                        isAuthenticated ?
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><LogoutOutlinedIcon/></button>
                        : <button onClick={() => loginWithRedirect()}><LoginIcon/></button>
                    }
                
              
            </div>
            </div>
         
            <div className='bottomMenuBottom'></div>
        </div>
    </div>
  )
}
