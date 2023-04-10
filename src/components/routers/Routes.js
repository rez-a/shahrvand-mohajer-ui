import Home from 'pages/Home';
import ProductPage from 'pages/ProductPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutHome from '../layout/LayoutHome';
import LayoutPage from '../layout/LayoutPage';
import MainGroupProducts from 'pages/MainGroupProducts';
import SideGroupProducts from 'pages/SideGroupProducts';
import Cart from 'pages/Cart';
import Checkout from 'pages/Checkout';
import Profile from 'pages/Profile';

import ProfileRoutes from './ProfileRoutes';
import NotFound from 'pages/NotFound';
import Breadcrumb from 'components/Breadcrumb';

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
            element={
              <>
                <Breadcrumb />
                <ProductPage />
              </>
            }
          />
          <Route
            path="products/:MainGroupErpCode/:slugMainGroupErpCode"
            element={
              <>
                <Breadcrumb />
                <MainGroupProducts />
              </>
            }
          />
          <Route
            path="products/:MainGroupErpCode/:slugMainGroupErpCode/:SideGroupErpCode/:slugSideGroupErpCode"
            element={
              <>
                <Breadcrumb />
                <SideGroupProducts />
              </>
            }
          />
          <Route
            path="checkout/cart"
            element={
              <>
                <Breadcrumb />
                <Cart />
              </>
            }
          />
          <Route
            path="checkout/shipping"
            element={
              <>
                <Breadcrumb />
                <Checkout />
              </>
            }
          />
          <Route
            path="profile/*"
            element={
              <Profile>
                <ProfileRoutes />
              </Profile>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
