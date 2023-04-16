import Home from 'pages/Home';
import ProductPage from 'pages/ProductPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutHome from 'components/layout/LayoutHome';
import LayoutPage from 'components/layout/LayoutPage';
import Profile from 'pages/Profile';
import NotFound from 'pages/NotFound';
import ProductsRoutes from './ProductsRoutes';
import CheckoutRoutes from './CheckoutRoutes';
import ProductRoutes from './ProductRoutes';

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/*" element={<LayoutPage />}>
          <Route path="products/*" element={<ProductsRoutes />} />
          <Route path="product/*" element={<ProductRoutes />} />
          <Route path="checkout/*" element={<CheckoutRoutes />} />
          <Route path="profile/*" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
