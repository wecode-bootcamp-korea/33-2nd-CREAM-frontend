import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GoodsDetail from './pages/goodsDetail/GoodsDetail';
import Main from './pages/main/Main';
import ItemList from './pages/main/components/itemList/ItemList';
import Footer from './components/footer/Footer';
import Buy from './pages/deals/Buy';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/goodsdetail" element={<GoodsDetail />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/products" element={<ItemList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
