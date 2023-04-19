import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import Categories from 'pages/Categories';
import Breadcrumb from 'components/Breadcrumb';
import Products from 'pages/Products';
import NotFound from 'pages/NotFound';
import ProductsSlide from 'pages/ProductsSlide';

const ProductsRoutes = (props) => {
  return (
    <>
      <Breadcrumb />
      <Routes>
        <Route index element={<Categories />} />
        <Route path=":mainErpCode" element={<Products />} />
        <Route path="section/:section" element={<ProductsSlide />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
ProductsRoutes.propTypes = {};

export default ProductsRoutes;
