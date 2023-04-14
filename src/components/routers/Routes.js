import Home from 'pages/Home';
import ProductPage from 'pages/ProductPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutHome from 'components/layout/LayoutHome';
import LayoutPage from 'components/layout/LayoutPage';
import Cart from 'pages/Cart';
import Checkout from 'pages/Checkout';
import Profile from 'pages/Profile';
import ProfileRoutes from './ProfileRoutes';
import NotFound from 'pages/NotFound';
import Breadcrumb from 'components/Breadcrumb';
import Categories from 'pages/Categories';
import ProductsRoutes from './ProductsRoutes';
import CheckoutRoutes from './CheckoutRoutes';

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/*" element={<LayoutPage />}>
          <Route path="products/*" element={<ProductsRoutes />} />
          <Route path="checkout/*" element={<CheckoutRoutes />} />
          <Route path="profile/*" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
