import Home from 'pages/Home';
import ProductPage from 'pages/ProductPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutHome from './layout/LayoutHome';
import LayoutPage from './layout/LayoutPage';
import MainGroupProducts from 'pages/MainGroupProducts';
import SideGroupProducts from 'pages/SideGroupProducts';
import Cart from 'pages/Cart';
import Checkout from 'pages/Checkout';
import Profile from 'components/profile/MainProfile';
import MainProfile from 'components/profile/MainProfile';

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
          <Route path="checkout/cart" element={<Cart />} />
          <Route path="checkout/shipping" element={<Checkout />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<MainProfile />} />
            <Route path="edit" element={<div></div>} />
            <Route path="addresses" element={<div></div>} />
            <Route path="orders" element={<div></div>}>
              <Route index element={<div></div>} />
              <Route path="details/:orderId" element={<div></div>} />
            </Route>
            <Route path="payments" element={<div></div>}>
              <Route index element={<div></div>} />
              <Route
                path="details/:paymentId"
                element={<div></div>}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
