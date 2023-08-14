import React, { useState } from 'react'
import Nav from '../../components/nav/Nav'
import Header from '../../components/header/Header'
import { Products } from '../../HomeProduct';
import { ProductDetail } from '../../ProductDetail';
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import './product.scss'
import ProductItem from '../../components/product/ProductItem';
import Detail from '../../components/detail/Detail';

export default function Product({product, setProduct, detail, view, close, setClose, addToCart}) {
    //const [product, setProduct] = useState(ProductDetail)

    const filterProduct = (product) => {
        const update = ProductDetail.filter((x) => {
            return x.Title.includes(product) || x.Cat === product;
        })
        setProduct(update);
        const AllProducts = () => 
        {
            setProduct(ProductDetail)
        }
    }

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
   <div className='product'>
        <h2># PRODUCTS</h2>
        <div className='contact'>
            <ul>
                <li className='link'>
                    Home
                </li>
                <li className='link'>
                    Product
                </li>
            </ul>

        </div>
    <div className='productMenu'>
        <div className='categories'>
            <h2>Categories</h2>
            <ul>
                <li onClick={() => filterProduct("All Product") } className='link'>All Product</li>
                <li onClick={() => filterProduct("Tablet") } className='link'>Tablet</li>
                <li onClick={() => filterProduct("Smart Watch") } className='link'>Smart Watch</li>
                <li onClick={() => filterProduct("HeadPhone") } className='link'>Headphone</li>
                <li onClick={() => filterProduct("Camera") } className='link'>Camera</li>
                <li onClick={() => filterProduct("Gaming") } className='link'>Gaming</li>
            </ul>

        </div>
        <div className='productBottom'>
            <div className='container'>
            {
                product.map((p) => (
                <ProductItem key={p.id} curElm={p} view={view} addToCart={addToCart} />
            ))}
            </div>

        </div>

    </div>
    </div>
    
  
   </>
  )
}
