import Home from 'pages/Home';
import ProductPage from 'pages/ProductPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutHome from './layout/LayoutHome';
import LayoutPage from './layout/LayoutPage';

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
