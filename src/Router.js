import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GoodsDetail from './pages/goodsDetail/GoodsDetail';
import Main from './pages/main/Main';
import ItemList from './pages/main/components/itemList/ItemList';
import Footer from './components/footer/Footer';
import Buy from './pages/deals/Buy';
import Nav from './components/nav/Nav';
import Login from './pages/users/login/Login';
import Redirect from './pages/users/Redirect';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/goodsdetail" element={<GoodsDetail />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/products" element={<ItemList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/signin/kakao/callback" element={<Redirect />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
