import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import Categories from 'pages/Categories';
import Breadcrumb from 'components/Breadcrumb';
import Products from 'pages/Products';
import ProductPage from 'pages/ProductPage';
import NotFound from 'pages/NotFound';

const ProductsRoutes = (props) => {
  return (
    <>
      <Breadcrumb />
      <Routes>
        <Route index element={<Categories />} />
        <Route path=":mainErpCode/:slugMain" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
ProductsRoutes.propTypes = {};

export default ProductsRoutes;
