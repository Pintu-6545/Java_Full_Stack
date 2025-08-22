import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Website/Pages/Home'
import Shop from './Website/Pages/Shop'
import ShopDetail from './Website/Pages/ShopDetail'
import Contact from './Website/Pages/Contact'
import ShoppingCart from './Website/Pages/ShoppingCart'
import Checkout from './Website/Pages/Checkout'

function App() {
  return (
    <BrowserRouter>
    <div>
         <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='/shop' element={<Shop />} />
                      <Route path='/shopdetail' element={<ShopDetail />} />
                      <Route path='/contact' element={<Contact />} />
                      <Route path='/cart' element={<ShoppingCart />} />
                      <Route path='/checkout' element={<Checkout />} />
         </Routes>
    </div>

    </BrowserRouter>
  )
}

export default App
