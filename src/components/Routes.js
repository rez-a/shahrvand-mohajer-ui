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
import Profile from 'pages/Profile';
import MainProfile from './profile/MainProfile';
import EditProfile from './profile/EditProfile';
import Addresses from './profile/Addresses';
import Orders from './profile/Orders';
import Payments from './profile/Payments';
import OrderDetails from './profile/OrderDetails';

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
            <Route path="edit" element={<EditProfile />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="orders">
              <Route index element={<Orders />} />
              <Route
                path="details/:orderId"
                element={<OrderDetails />}
              />
            </Route>
            <Route path="payments">
              <Route index element={<Payments />} />
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
