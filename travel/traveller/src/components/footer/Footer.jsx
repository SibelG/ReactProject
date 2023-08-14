import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import './footer.scss'

export default function footer () {
  return (
    <div className="footer">
        <div className='container'>
            <div className='leftFooter'>
                <div className='logo'>
                <img src="assets/shop.png" alt="shop"/>
                <h3>Shofy.</h3>
                </div>
                <div className='desc'>
                   <p>
                    We are team of designers and developers 
                    that create high quality WorldPress
                   </p>
                   
                   <div className='icon'>
                        <li><RiFacebookFill /></li>
                        <li><AiOutlineInstagram /></li>
                        <li><AiOutlineTwitter /></li>
                        <li><BsYoutube /></li>
                    </div>
                </div>

            </div>
            <div className='centerFooter'>
               
                <div>
                <h4>My Account</h4>
                    <ul>
                        <li>Account</li>
                        <li>Order</li>
                        <li>Cart</li>
                        <li>Shipping</li>
                        <li>Return</li>
                    </ul>
                </div>

            </div>
            <div className='rightFooter'>
                
                <div>
                <h4>Pages</h4>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Thema & Condititon</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
