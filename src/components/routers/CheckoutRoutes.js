import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from 'pages/Cart';
import Checkout from 'pages/Checkout';

const CheckoutRoutes = (props) => {
  return (
    <>
      <Routes>
        <Route path="cart" element={<Cart />} />
        <Route path="shipping" element={<Checkout />} />
      </Routes>
    </>
  );
};

CheckoutRoutes.propTypes = {};

export default CheckoutRoutes;
