import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom'
import './rout.scss'

export default function Rout() {
  return (
    <div className='rout'>
        <div className='topHeader'>
        
            <div className='rootLeft'>
                <span>The Best Note Book Collection 2023</span>
                <Link to="/product" className='link'>Shop Now <ArrowForwardIcon/></Link>
            </div>
            <div className='img_box'>
              <img src="assets/img/slider-img.png" alt=""/>
            </div>
           
        </div>

    </div>
  )
}
