import React from 'react'
import './product.scss'
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

export default function ProductItem({curElm, view, addToCart}) {


  return (
    <div className='product_box'>
    <div className='img_box'>
      <img src={curElm.Img} alt={curElm.Title}></img>
      <div className='icon'>
        <li onClick={() => addToCart (curElm)}><AiOutlineShoppingCart /></li>
        <li onClick={() => view (curElm)}><BsEye /></li>
        <li><AiOutlineHeart /></li>                                     
      </div>
    </div>
    <div className='detail'>
      <p>{curElm.Cat}</p>
      <h3>{curElm.Title}</h3>
      <h4>${curElm.Price}</h4>
    </div>
  </div>

  )
}


//onClick={() => view (curElm)}
//onClick={() => addtocart (curElm)}
