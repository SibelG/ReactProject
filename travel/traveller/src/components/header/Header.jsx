import React, {useEffect, useRef, useState} from 'react'
import './header.scss'
import {Link} from "react-router-dom"


import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import { useAuth0 } from "@auth0/auth0-react";
import { ProductDetail } from '../../ProductDetail';


export default function Header({searchbtn}) {
    const [search, setSearch] = useState()
   
    const [searchedArray, setSearchedArray] = React.useState("")
 
    const searchBtn = () => {
    if(searchbtn.length === 0){
      setSearchedArray(ProductDetail)
    } else {
      const searchedObjects = []
      ProductDetail.forEach((singleObject, index) => {
        Object.values(singleObject).every((onlyValues, valIndex) => {
          if(onlyValues.toLowerCase().includes(searchbtn.toLowerCase())){
            searchedObjects.push(singleObject)
            return;
          }
        })
      })
      setSearchedArray(searchedObjects) 
    }
  }

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
            <input className="searchBox" type='text' value={search} placeholder='Search Your Product...' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
                <button className='search' onClick={() => searchbtn (search)}>Search</button>
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
                <Link to='/cart' className='emptycartbtn'>
                    <ShoppingBasketOutlinedIcon className='rightBtn' style={{ color: "rgb(2, 137, 209)" }}/>
               </Link>
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
