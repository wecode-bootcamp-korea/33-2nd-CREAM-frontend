import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GoodsDetail from './pages/goodsDetail/GoodsDetail';
import Main from './pages/main/Main';
import Footer from './components/footer/Footer';
import Buy from './pages/deals/Buy';
import Sell from './pages/deals/Sell';
import Nav from './components/nav/Nav';
import Login from './pages/users/login/Login';
import Redirect from './pages/users/Redirect';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/products" element={<Main />} />
        <Route path="/products/:id" element={<GoodsDetail />} />
        <Route path="/products/:id/buy" element={<Buy />} />
        <Route path="/products/:id/sell" element={<Sell />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/signin/kakao/callback" element={<Redirect />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
