import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import Categories from 'pages/Categories';
import Products from 'pages/Products';
import NotFound from 'pages/NotFound';
import ProductsSection from 'pages/ProductsSection';
import SubCategories from 'pages/SubCategories';

const ProductsRoutes = (props) => {
  return (
    <>
      <Routes>
        <Route index element={<Categories />} />
        <Route path=":mainErpCode" element={<SubCategories />} />
        <Route
          path=":mainErpCode/:subErpCode"
          element={<Products />}
        />
        <Route
          path="section/:section"
          element={<ProductsSection />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
ProductsRoutes.propTypes = {};

export default ProductsRoutes;
