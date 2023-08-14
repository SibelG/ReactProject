import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import './cartItem.scss'

export default function CartItem({curElm , cart, setCart}) {
  
     const incqty = (product) => {
        const exist = cart.find((x) => 
        {
            return x.id === product.id
        })

        setCart(cart.map((curElm) => {

            return curElm.id === product.id ? {...exist, qty:exist.qty+1} : curElm

        }))
     }

     const decqty = (product) => {
        const exist = cart.find((x) => 
        {
            return x.id === product.id
        })

        setCart(cart.map((curElm) => {

            return curElm.id === product.id ? {...exist, qty:exist.qty - 1} : curElm

        }))
     }

     const removeProduct = (product) => {
        const exist = cart.find((x)=> {
            return x.id === product.id
        })

        if(exist.qty >0){
            setCart(cart.filter((x)=>{
                return x.id !== product.id

            }))
        }
     }


  return (
    <div className='cartItem'>
<div className='img-box'>
            <img src={curElm.Img} alt={curElm.Title}></img>
            </div>
            <div className='detail'>
                <h4>{curElm.Cat}</h4>
                <h2>{curElm.Title}</h2>
                <h3>{curElm.Price}</h3>
                <div className='count'>
                    <button className='incqty' onClick={() => incqty(curElm)}>+</button>
                    <input type="text" value={curElm.qty} />
                    <button className='decqty' onClick={() => decqty(curElm)}>-</button>

                </div>
                <h4>sub total: ${curElm.Price * curElm.qty}</h4>
             </div>
             <div className='close'>
                <button onClick={() => removeProduct(curElm)}><AiOutlineClose /></button>
        </div>
    </div>
  )
}
