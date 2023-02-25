import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Login from '../src/pages/Login/Login'
import Register from '../src/pages/Register/Register'
import Home from '../src/pages/Home/Home'
import Product from './pages/Product/Product';
import Detail from './pages/Detail/Detail'
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout'
import Wishlist from './pages/Wishlist/Wishlist'


function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/register' element={<Register />}/>
        <Route exact path='/product' element={<Product />} />
        <Route path='/product/detail' element={<Detail />} />
        <Route exact path='/cart' element={<Cart />}/>
        <Route exact path='/checkout' element={<Checkout />}/>
        <Route exact path='/favorite' element={<Wishlist />}/>
      </Routes>
    </div>
  );
}

export default App;
