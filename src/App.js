import React from 'react';
<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom'
import Login from '../src/pages/Login/Login'
import Register from '../src/pages/Register/Register'
import Home from '../src/pages/Home/Home'
import Product from './pages/Product/Product';
import Detail from './pages/Detail/Detail'
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout'
import Wishlist from './pages/Wishlist/Wishlist'
=======
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import Product from './pages/Product';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
>>>>>>> c6dff898 (clear conflict)


function App() {
  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default App;
