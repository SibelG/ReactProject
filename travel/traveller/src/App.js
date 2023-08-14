import React, {useEffect, useRef, useState} from 'react'
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rout from './pages/home/Home';
import Product from './pages/product/Product';
import Footer from './components/footer/Footer'
import { ProductDetail } from './ProductDetail';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';


function App() {

  const [cart, setCart] = useState([])
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  //filter product
  const [product, setProduct] = useState(ProductDetail)
  const searchbtn = (product) => 
  {
    const change = ProductDetail.filter((x) => 
    {
      return x.Title.includes(product) || x.Cat === product;
    })
    setProduct(change)
  }
  //product detail
  const view = (product) => 
  {
    setDetail([{...product}])
    setClose(true)
  }

  const addToCart = (product) => {
    const exist = cart.find((x)=> {
      return x.id === product.id

    })
    if(exist) {
      alert ("This product added to cart")
    }
    else {
      setCart([...cart, {...product, qty:1}])
      alert("product is added to cart")
    }
  }

  console.log(cart)

  return (
   <>
  
   <BrowserRouter>
   <Nav/>
   <Header/>

   <Routes>
        <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addToCart={addToCart}/>}/>
        <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addToCart={addToCart}/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
 
   </BrowserRouter>
  
   </>
  );
}

export default App;
