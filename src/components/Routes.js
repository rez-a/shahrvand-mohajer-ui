import Home from 'pages/Home';
import ProductPage from 'pages/ProductPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutHome from './layout/LayoutHome';
import LayoutPage from './layout/LayoutPage';
import MainGroupProducts from 'pages/MainGroupProducts';
import SideGroupProducts from 'pages/SideGroupProducts';
import Cart from 'pages/Cart';

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/*" element={<LayoutPage />}>
          <Route
            path="product/:erpCode/:slugProduct"
            element={<ProductPage />}
          />
          <Route
            path="products/:MainGroupErpCode/:slugMainGroupErpCode"
            element={<MainGroupProducts />}
          />
          <Route
            path="products/:MainGroupErpCode/:slugMainGroupErpCode/:SideGroupErpCode/:slugSideGroupErpCode"
            element={<SideGroupProducts />}
          />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
