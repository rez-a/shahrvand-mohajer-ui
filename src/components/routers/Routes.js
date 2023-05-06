import Home from 'pages/Home';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutHome from 'components/layout/LayoutHome';
import LayoutPage from 'components/layout/LayoutPage';
import Profile from 'pages/Profile';
import NotFound from 'pages/NotFound';
import ProductsRoutes from './ProductsRoutes';
import CheckoutRoutes from './CheckoutRoutes';
import ProductRoutes from './ProductRoutes';
import Login from 'pages/Login';
import Search from 'pages/Search';
import AboutUs from 'pages/AboutUs';
import ContactUs from 'pages/ContactUs';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutHome />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<LayoutPage />}>
        <Route path="products/*" element={<ProductsRoutes />} />
        <Route path="product/*" element={<ProductRoutes />} />
        <Route path="checkout/*" element={<CheckoutRoutes />} />
        <Route path="profile/*" element={<Profile />} />
        <Route path="search" element={<Search />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
