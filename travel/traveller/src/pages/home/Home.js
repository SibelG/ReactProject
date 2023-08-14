import React from 'react'
import {Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import { Products } from '../../HomeProduct';
import './home.scss'
import ProductItem from '../../components/product/ProductItem';
import Detail from '../../components/detail/Detail';
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';

export default function Home({product, setProduct, detail, view, close, setClose, addToCart}) {
  return (
    <>
   {
    close ? 
    <div className='product_detail'>
        <div className='container'>
            <button onClick = {() => setClose(false)} className='closeBtn'><AiOutlineCloseCircle /></button>
       {
            detail.map((p) => (
            <Detail key={p.id} curElm={p} />
        ))}
 
        </div>
    </div> : null
   }
     <div className='top_banner'>
    <div className='container'>
        <div className='detail'>
            <h2>The Best Note Book Colletion 2023</h2>
            <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
        </div>
        <div className='img_box'>
            <img src='./assets/img/slider-img.png' alt='sliderimg'></img>
        </div>
    </div>
</div>
<div className='product_type'>
  <div className='container'>
    <div className='box'>
      <div className='img_box'>
        <img src='./assets/img/Mobile Phone.png' alt='mobile'></img>
      </div>
      <div className='detail'>
        <p>23 products</p>
      </div>
    </div>
    <div className='box'>
      <div className='img_box'>
        <img src='./assets/img/smart watch.png' alt='watch'></img>
      </div>
      <div className='detail'>
        <p>18 products</p>
      </div>
    </div>
    <div className='box'>
      <div className='img_box'>
        <img src='./assets/img/headphone.png' alt='headphone'></img>
      </div>
      <div className='detail'>
        <p>52 products</p>
      </div>
    </div>
    <div className='box'>
      <div className='img_box'>
        <img src='./assets/img/cpu heat.jpg' alt='cpu '></img>
      </div>
      <div className='detail'>
        <p>63 products</p>
      </div>
    </div>
  </div>
</div>
<div className='about'>
  <div className='container'>
    <div className='box'>
      <div className='icon'>
        <FiTruck />
      </div>
      <div className='detail'>
        <h3>Free Shipping</h3>
        <p>Oder above $1000</p>
      </div>
    </div>
    <div className='box'>
      <div className='icon'>
        <BsCurrencyDollar />
      </div>
      <div className='detail'>
        <h3>Return & Refund</h3>
        <p>Money Back Gaurenty</p>
      </div>
    </div>
    <div className='box'>
      <div className='icon'>
        <CiPercent />
      </div>
      <div className='detail'>
        <h3>Member Discount</h3>
        <p>On every Oder</p>
      </div>
    </div>
    <div className='box'>
      <div className='icon'>
        <BiHeadphone />
      </div>
      <div className='detail'>
        <h3>Customer Support</h3>
        <p>Every Time Call Support</p>
      </div>
    </div>
  </div>
</div>
<div className='product'>
  <h2>Top Products</h2>
  <div className='container'>
    {
        Products.map((p) => (
          <ProductItem key={p.id} curElm={p} view={view} addToCart={addToCart} />
        ))}
    </div>
</div>

<div className='banner'>
  <div className='container'>
  <div className='detail'>
    <h4>LATEST TECHNOLOGY ADDED</h4>
    <h3>Apple iPad 10.2 9th Gen - 2021</h3>
    <p>$ 986</p>
    <Link to='/product' className='link'>Shop Now  <BsArrowRight /></Link>
  </div>
  <div className='img_box'>
    <img src='./assets/img/slider-img.png' alt='sliderimg'></img>
  </div>
  </div>
</div>
    </>
   
  )
}
