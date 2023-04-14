import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import Cart from 'pages/Cart';
import Checkout from 'pages/Checkout';
import Breadcrumb from 'components/Breadcrumb';

const CheckoutRoutes = (props) => {
  return (
    <>
      <Breadcrumb />
      <Routes>
        <Route path="cart" element={<Cart />} />
        <Route path="shipping" element={<Checkout />} />
      </Routes>
    </>
  );
};

CheckoutRoutes.propTypes = {};

export default CheckoutRoutes;
