import React from 'react'
import CartItem from '../../components/cart/CartItem'
import { Link } from 'react-router-dom'

export default function Cart({cart, setCart}) 
 {
  return (
    <>
    
       <div className='cart'>
      {
        cart.length === 0 &&
        <div className='emptycart'>
            <h2 className='empty'>Cart is empty</h2>
            <Link to='/product' className='emptycartbtn'>Shop Now</Link>
        </div>
      }
        <div className='container'>
            {
                  cart.map((p) => (
                    <CartItem key={p.id} curElm={p} cart = {cart} setCart = {setCart} />
            ))}

        </div>
       </div>

    </>
 
  )
}
