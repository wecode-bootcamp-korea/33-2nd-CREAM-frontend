import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import ItemList from './pages/main/components/itemList/ItemList';
import Footer from './components/footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<ItemList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
